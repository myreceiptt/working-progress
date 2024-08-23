import { notFound } from "next/navigation";
import { allProgresses } from "contentlayer/generated";
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
  return allProgresses
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const progress = allProgresses.find((progress) => progress.slug === slug);

  if (!progress) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "progresses", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header progress={progress} views={views} />
      <ReportView slug={progress.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={progress.body.code} />
      </article>
      <Footer views={views} />
    </div>
  );
}
