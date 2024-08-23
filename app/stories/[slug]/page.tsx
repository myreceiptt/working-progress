import { notFound } from "next/navigation";
import { allStories } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { Footer } from "./footer";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allStories
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const story = allStories.find((story) => story.slug === slug);

  if (!story) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "stories", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header story={story} views={views} />
      <ReportView slug={story.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={story.body.code} />
      </article>
      <Footer views={views} />
    </div>
  );
}
