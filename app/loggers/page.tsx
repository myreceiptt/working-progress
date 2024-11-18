import Link from "next/link";
import React from "react";
import { allLoggers } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function LoggersPage() {
  const views = (
    await redis.mget<number[]>(
      ...allLoggers.map((p) => ["pageviews", "loggers", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allLoggers[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allLoggers.find((logger) => logger.slug === "19920229")!;
  const top2 = allLoggers.find((logger) => logger.slug === "20160229")!;
  const top3 = allLoggers.find((logger) => logger.slug === "20200229")!;
  const running = allLoggers.find((logger) => logger.slug === "running")!;
  const bottom3 = allLoggers.find((logger) => logger.slug === "20440229")!;
  const bottom2 = allLoggers.find((logger) => logger.slug === "21480229")!;
  const sorted = allLoggers
    .filter((p) => p.published)
    .filter(
      (logger) =>
        logger.slug !== featured.slug &&
        logger.slug !== top2.slug &&
        logger.slug !== top3.slug &&
        logger.slug !== running.slug &&
        logger.slug !== bottom3.slug &&
        logger.slug !== bottom2.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 pb-10 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Our Logs
          </h2>
          <p className="mt-4 text-zinc-400">
            Glitchy records of our events occurring in{" "}
            <Link
              href="#"
              className="underline duration-500 hover:text-zinc-300"
            >
              0101 Universe
            </Link>
            ...
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 md:gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={`/loggers/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0
                    )}
                  </span>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-4 md:gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((logger) => (
              <Card key={logger.slug}>
                <Article logger={logger} views={views[logger.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((logger) => (
                <Card key={logger.slug}>
                  <Article logger={logger} views={views[logger.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((logger) => (
                <Card key={logger.slug}>
                  <Article logger={logger} views={views[logger.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((logger) => (
                <Card key={logger.slug}>
                  <Article logger={logger} views={views[logger.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 md:gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={`/loggers/${running.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {running.date ? (
                      <time dateTime={new Date(running.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(running.date))}
                      </time>
                    ) : (
                      <span>LIVE UPDATING</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[running.slug] ?? 0
                    )}
                  </span>
                </div>
                <h2
                  id="running-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {running.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {running.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-4 md:gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[bottom3, bottom2].map((logger) => (
              <Card key={logger.slug}>
                <Article logger={logger} views={views[logger.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>
      <BottomNavigation />
    </div>
  );
}
