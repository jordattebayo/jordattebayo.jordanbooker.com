import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.navContainer}>
      <li className={styles.navLinkContainer}>
        <Link href="/">
          <a className={styles.navLinkHome}>
            <span>Home</span>
          </a>
        </Link>
      </li>
      <li className={styles.navLinkContainer}>
        <Link href="/about">
          <a className={styles.navLinkAbout}>
            <span>About</span>
          </a>
        </Link>
      </li>
      <li className={styles.navLinkContainer}>
        <a
          className={styles.navLinkGit}
          href="https://www.github.com/jordattebayo"
          target="_blank"
        >
          <span>GitHub</span>
        </a>
      </li>
    </ul>
    {/* <style jsx>{`
      html,
      a {
        text-decoration: none;
      }
    `}</style> */}
  </nav>
);

export default Navbar;
