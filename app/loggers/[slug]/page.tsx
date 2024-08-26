import { notFound } from "next/navigation";
import { allLoggers } from "contentlayer/generated";
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
  return allLoggers
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const logger = allLoggers.find((logger) => logger.slug === slug);

  if (!logger) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "loggers", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header logger={logger} views={views} />
      <ReportView slug={logger.slug} />

      <article className="px-4 pt-12 pb-24 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={logger.body.code} />
      </article>
      <Footer views={views} />
    </div>
  );
}
