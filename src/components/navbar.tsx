import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <Link href="/" className="home-btn">
        home
      </Link>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link href="/services">Serviços</Link>
          </li>
          <li>
            <Link href="/projects">Projetos</Link>
          </li>
          <li>
            <Link href="/articles">Artigos</Link>
          </li>
          <li>
            <Link href="/tortoise">Tortoise</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
