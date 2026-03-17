import { Coin } from "@/types/coins";

interface CoinCardProps {
  coin: Coin;
}

export default function CoinCard({ coin }: CoinCardProps) {
  return (
    <div className="border p-4 rounded-lg">
      <img src={coin.image} alt={coin.name} className="w-10 h-10" />
      <h3>{coin.name}</h3>
      <p>${coin.current_price.toLocaleString()}</p>
    </div>
  );
}
