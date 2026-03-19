import { plusJakartaSans } from "./fonts";
import CoinCard from "./components/features/BestCoins/CoinCard";

export default function LoadingPage() {
  const array = new Array(6).fill(null);
  return (
    <main className="container p-5">
      <header className="text-center flex flex-col gap-4">
        <h1
          className={`text-4xl ${plusJakartaSans.className} font-bold tracking-tight text-accent-color`}
        >
          Top crypto coins
        </h1>
        <p className="text-pretty">
          The best crypto coins to start trading with your portfolio today !
        </p>
      </header>
      <section className="p-5 w-full h-fit min-h-200  flex flex-col items-center justify-start">
        <h2 className="text-2xl font-bold">Coin List</h2>
        <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {array.map((coin) => (
            <li key={coin.id}>
              <CoinCard coin={coin} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
