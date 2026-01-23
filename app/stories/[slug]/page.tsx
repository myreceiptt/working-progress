import { notFound } from "next/navigation";
import { getAllStories, getStoryBySlug } from "@/lib/content";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { Footer } from "./footer";
import "../../components/mdx.css";
import { ReportView } from "../../../util/view";
import { Redis } from "@upstash/redis";
import TinyWrapper from "./tiny-wrapper";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  const allStories = await getAllStories();
  return allStories
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const publishedAt = story.date ? new Date(story.date).toISOString() : null;
  // const publishedAt = new Date(project.date:).toISOString();

  return {
    metadataBase: new URL("https://nota.endhonesa.com"),
    title: {
      template: "%s | Beware of Scams!", // Included on each child page
      default: story.title, // Title on each page
    },
    description: story.description, // Description for each page
    // applicationName: "Prof. NOTA's Working Progress",
    authors: [
      { name: "MyReceipt", url: "https://www.endhonesa.com" },
      { name: "Prof. NOTA", url: "https://prompt.endhonesa.com" },
    ],
    // manifest: "/manifest.webmanifest",
    // generator: "Breads Factory",
    // keywords: [
    //   "MyReceipt",
    //   "Prof. NOTA",
    //   "Professor NOTA",
    //   "Web3 Developer",
    //   "Blockchain",
    //   "Decentralized Corporation",
    //   "Fungible Token",
    //   "Non-Fungible Token",
    //   "NFT",
    //   "Professional Educator Speaker",
    // ],
    // referrer: "origin-when-cross-origin",
    // creator: "MyReceipt and Friends",
    // publisher: "Prof. NOTA Inc.",
    // robots: {
    //   index: true,
    //   follow: true,
    //   nocache: true,
    //   googleBot: {
    //     index: true,
    //     follow: true,
    //     noimageindex: true,
    //     "max-video-preview": -1,
    //     "max-image-preview": "large",
    //     "max-snippet": -1,
    //   },
    // },
    alternates: {
      canonical: ("/stories/" + slug) as string, // Canonical for each page
      // languages: {
      //   //   Only used when billingual page provided
      //   "en-US": ("/stories/" + slug + "/en-US") as string",
      //   "id-ID": ("/stories/" + slug + "/id-ID") as string",
      // },
    },
    // formatDetection: {
    //   email: false,
    //   address: false,
    //   telephone: false,
    // },
    openGraph: {
      title: story.title, // Title on each page
      description: story.description, // Description on each page
      url: ("https://nota.endhonesa.com/stories/" + slug) as string, // URL for each page
      siteName: "Prof. NOTA's Working Progress",
      locale: "en-US",
      images: [
        {
          url: ("https://nota.endhonesa.com" + story.gambar) as string, // Must be an absolute URL
          width: 1920,
          height: 1080,
          alt: story.title, // Alternate text for image
        },
        {
          url: ("https://nota.endhonesa.com" + story.gambar) as string, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: story.title, // Alternate text for image
        },
      ],
      // videos: [
      //   {
      //     url: ("https://nota.endhonesa.com" + story.video) as string, // Must be an absolute URL
      //     width: 800,
      //     height: 600,
      //   },
      // ],
      type: "article", // Can be an "website" for the "type"
      publishedTime: publishedAt, // Only use this for "article"
      authors: ["MyReceipt", "Prof. NOTA"], // Only use this for "article"
    },
    twitter: {
      card: "summary_large_image",
      siteId: "@MyReceiptTT",
      creator: "@MyReceiptTT",
      creatorId: "@MyReceiptTT",
      title: story.title, // Title on each page
      description: story.description, // Description on each page
      images: [("https://nota.endhonesa.com" + story.gambar) as string], // Must be an absolute URL
    },
    // icons: {
    //   shortcut: "/favicon.ico",
    //   icon: "/icon.png",
    //   apple: "/apple-icon.png",
    //   other: {
    //     rel: "apple-touch-icon-precomposed",
    //     url: "/apple-icon.png",
    //   },
    // },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "stories", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-400 min-h-screen">
      <Header story={story} views={views} />
      <ReportView slug={story.slug} />

      <article className="px-4 py-12 mx-auto max-w-4xl prose prose-zinc prose-quoteless">
        <TinyWrapper receiptId={story.receiptId}>
          <Mdx source={story.body} />
        </TinyWrapper>
      </article>
      <Footer views={views} />
    </div>
  );
}
