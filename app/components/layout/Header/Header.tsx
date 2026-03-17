import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-18">
      <nav className="w-full h-full flex items-center justify-center">
        <ul className="flex gap-4 items-center justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
