import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-18 border-b border-border/40 backdrop-blur-md shadow-sm">
      <nav className="w-full h-full flex items-center justify-center">
        <ul className="flex gap-6 items-center justify-center font-medium text-white/90">
          <li>
            <Link href="/" className="hover:text-sky-200">
              Top 10 Coins
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
