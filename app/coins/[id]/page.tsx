/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MoveLeft, ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { getCoinsById } from "@/lib/api";
import { ApiError } from "@/lib/exceptions";
import { notFound } from "next/navigation";

export default async function CoinsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { id } = await params;
  let data;

  try {
    data = await getCoinsById(id);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }
    throw error;
  }
  const currentPrice = data.market_data.current_price.usd.toLocaleString();
  const marketCapBillion = (data.market_data.market_cap.usd / 1e9).toFixed(2);
  const allTimeHigh = data.market_data.ath.usd.toLocaleString();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all mb-12 group"
      >
        <MoveLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to Dashboard
      </Link>

      <div className="flex flex-col gap-8">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={data.image.large}
              alt={data.name}
              className="w-16 h-16 object-contain"
            />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold tracking-tight">
                  {data.name}
                </h1>
                <Badge
                  variant="secondary"
                  className="font-mono uppercase  border border-sky-500/40 px-2 py-0.5 rounded-md"
                >
                  {data.symbol}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                Market Cap Rank #{data.market_cap_rank}
              </p>
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full bg-transparent hover:transform hover:-translate-y-1 transition-all"
          >
            <a
              href={data.links.homepage[0]}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              Official Website <ExternalLink size={14} />
            </a>
          </Button>
        </header>

        <hr className="border-border" />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">About {data.name}</h2>
            <div
              className="text-muted-foreground leading-relaxed text-pretty prose prose-zinc dark:prose-invert max-w-none
              [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline"
              dangerouslySetInnerHTML={{
                __html: data.description.en || "No description available.",
              }}
            />
          </div>

          <aside className="space-y-8">
            <div className="p-6 rounded-2xl bg-transparent text-white backdrop-blur-md border border-border/40 space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Price
              </h3>
              <p className="text-4xl font-bold tracking-tight text-accent-color">
                ${currentPrice}
              </p>
            </div>

            <div className="space-y-4 px-2">
              <div className="flex justify-between items-center border-b border-border/50 pb-3">
                <span className="text-sm text-muted-foreground">
                  Market Cap
                </span>
                <span className="text-sm font-medium">
                  ${marketCapBillion}B
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-3">
                <span className="text-sm text-muted-foreground">
                  All Time High
                </span>
                <span className="text-sm font-medium text-emerald-500 font-mono">
                  ${allTimeHigh}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="text-sm text-muted-foreground">
                  Last Updated
                </span>
                <span className="text-xs text-muted-foreground">
                  {new Date(data.last_updated).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
