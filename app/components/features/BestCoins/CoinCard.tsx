/* eslint-disable @next/next/no-img-element */
import { Coin } from "@/types/coins";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import Link from "next/link";

interface CoinCardProps {
  coin: Coin;
}

export default function CoinCard({ coin }: CoinCardProps) {
  const isPositive = coin.price_change_percentage_24h > 0;

  return (
    <Card className="w-full max-w-sm ">
      <img
        src={coin.image}
        alt={coin.name}
        className="aspect-video w-full object-contain p-6 bg-muted/20"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Rank #{coin.market_cap_rank}</Badge>
        </CardAction>
        <CardTitle>
          {coin.name} ({coin.symbol.toUpperCase()})
        </CardTitle>
        <CardDescription>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(coin.current_price)}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Market Cap:</span>
          <span>${coin.market_cap.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">24h Change:</span>
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {coin.price_change_percentage_24h}%
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Volume:</span>
          <span>${coin.total_volume.toLocaleString()}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/coins/${coin.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
