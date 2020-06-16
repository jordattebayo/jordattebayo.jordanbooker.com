import Link from "next/link";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <a href="https://www.github.com/jordattebayo">Github</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
