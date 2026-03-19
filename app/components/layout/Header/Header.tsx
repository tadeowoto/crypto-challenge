import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-18 bg-card/60 backdrop-blur-md border border-border/40 shadow-sm">
      <nav className="w-full h-full flex items-center justify-center">
        <ul className="flex gap-6 items-center justify-center font-medium">
          <li>
            <Link href="/" className="text-text-color hover:text-accent-foreground">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-text-color hover:text-accent-foreground">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
