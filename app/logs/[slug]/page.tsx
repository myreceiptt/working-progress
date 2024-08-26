import { notFound } from "next/navigation";
import { allLogs } from "contentlayer/generated";
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
  return allLogs
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const log = allLogs.find((log) => log.slug === slug);

  if (!log) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "logs", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header log={log} views={views} />
      <ReportView slug={log.slug} />

      <article className="px-4 pt-12 pb-24 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={log.body.code} />
      </article>
      <Footer views={views} />
    </div>
  );
}
