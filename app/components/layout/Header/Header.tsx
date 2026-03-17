export default function Header() {
  return (
    <header className="w-full h-18">
      <nav className="w-full h-full flex items-center justify-center">
        <ul className="flex gap-4 items-center justify-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
