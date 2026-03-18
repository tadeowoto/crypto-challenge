/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { getCoinsById } from "@/lib/api";
export default async function CoinsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getCoinsById(id);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <MoveLeft size={16} />
        Back
      </Link>

      <div className="flex flex-col gap-8">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src={data.image.large}
              alt={data.name}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
                {data.name}
                <Badge variant="secondary" className="font-mono">
                  {data.symbol.toUpperCase()}
                </Badge>
              </h1>
              <p className="text-muted-foreground">
                Market Rank #{data.market_cap_rank}
              </p>
            </div>
          </div>

          <Button asChild variant="outline" size="sm" className="rounded-full">
            <a
              href={data.links.homepage[0]}
              target="_blank"
              rel="noreferrer"
              className="text-background-color"
            >
              Website <ExternalLink className="ml-2 w-4 h-4 " />
            </a>
          </Button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-12">
          <div className="md:col-span-2 prose prose-zinc dark:prose-invert max-w-none">
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <div
              className="text-muted-foreground leading-relaxed text-pretty"
              dangerouslySetInnerHTML={{ __html: data.description.en }}
            />
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Price
              </h3>
              <p className="text-3xl font-semibold tracking-tight">
                ${data.market_data.current_price.usd.toLocaleString()}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="text-sm text-muted-foreground">
                  Market Cap
                </span>
                <span className="text-sm font-medium">
                  ${(data.market_data.market_cap.usd / 1e9).toFixed(2)}B
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-sm text-muted-foreground">
                  All Time High
                </span>
                <span className="text-sm font-medium text-emerald-500">
                  ${data.market_data.ath.usd.toLocaleString()}
                </span>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
