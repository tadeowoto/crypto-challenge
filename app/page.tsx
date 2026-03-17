import Header from "./components/Header";
import BestCoins from "./components/BestCoins";
import { plusJakartaSans } from "./ui/fonts";
export default function Home() {
  return (
    <>
      <Header />
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
        <BestCoins />
      </main>
    </>
  );
}
