import coinsMock from "@/mocks/top10response.json";
import CoinCard from "./CoinCard";

export default function BestCoins() {
  return (
    <section className="p-5 w-full h-fit min-h-200  flex flex-col items-center justify-start">
      <h2 className="text-2xl font-bold">Coin List</h2>
      <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {coinsMock.map((coin) => (
          <li key={coin.id}>
            <CoinCard coin={coin} />
          </li>
        ))}
      </ul>
    </section>
  );
}
