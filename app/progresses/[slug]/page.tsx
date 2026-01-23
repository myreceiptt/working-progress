import { notFound } from "next/navigation";
import { getAllProgresses, getProgressBySlug } from "@/lib/content";
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
  const allProgresses = await getAllProgresses();
  return allProgresses
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const progress = await getProgressBySlug(slug);

  if (!progress) {
    notFound();
  }

  const publishedAt = progress.date
    ? new Date(progress.date).toISOString()
    : null;
  // const publishedAt = new Date(project.date:).toISOString();

  return {
    metadataBase: new URL("https://nota.endhonesa.com"),
    title: {
      template: "%s | Beware of Scams!", // Included on each child page
      default: progress.title, // Title on each page
    },
    description: progress.description, // Description for each page
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
      canonical: ("/progresses/" + slug) as string, // Canonical for each page
      // languages: {
      //   //   Only used when billingual page provided
      //   "en-US": ("/progresses/" + slug + "/en-US") as string",
      //   "id-ID": ("/progresses/" + slug + "/id-ID") as string",
      // },
    },
    // formatDetection: {
    //   email: false,
    //   address: false,
    //   telephone: false,
    // },
    openGraph: {
      title: progress.title, // Title on each page
      description: progress.description, // Description on each page
      url: ("https://nota.endhonesa.com/progresses/" + slug) as string, // URL for each page
      siteName: "Prof. NOTA's Working Progress",
      locale: "en-US",
      images: [
        {
          url: ("https://nota.endhonesa.com" + progress.gambar) as string, // Must be an absolute URL
          width: 1920,
          height: 1080,
          alt: progress.title, // Alternate text for image
        },
        {
          url: ("https://nota.endhonesa.com" + progress.gambar) as string, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: progress.title, // Alternate text for image
        },
      ],
      // videos: [
      //   {
      //     url: ("https://nota.endhonesa.com" + progress.video) as string, // Must be an absolute URL
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
      title: progress.title, // Title on each page
      description: progress.description, // Description on each page
      images: [("https://nota.endhonesa.com" + progress.gambar) as string], // Must be an absolute URL
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
  const progress = await getProgressBySlug(slug);

  if (!progress) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "progresses", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-400 min-h-screen">
      <Header progress={progress} views={views} />
      <ReportView slug={progress.slug} />

      <article className="px-4 py-12 mx-auto max-w-4xl prose prose-zinc prose-quoteless">
        <TinyWrapper receiptId={progress.receiptId}>
          <Mdx source={progress.body} />
        </TinyWrapper>
      </article>
      <Footer views={views} />
    </div>
  );
}
