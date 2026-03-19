import BestCoins from "./components/features/BestCoins/BestCoins";
import { plusJakartaSans } from "./fonts";
export default function Home() {
  return (
    <>
      <main className="w-full h-full p-5">
        <header className="text-center flex flex-col gap-4">
          <h1
            className={`text-4xl ${plusJakartaSans.className} font-bold tracking-tight text-accent-color `}
          >
            Top crypto coins
          </h1>
          <p className="text-pretty">
            The best crypto coins to start trading with your portfolio today !
          </p>
        </header>
        <div className="w-full h-full p-5 ">
          <BestCoins />
        </div>
      </main>
    </>
  );
}
