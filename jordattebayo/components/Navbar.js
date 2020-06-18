import Link from "next/link";

const Navbar = () => (
  <div>
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
    <style jsx>{`
      html,
      a {
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Navbar;
