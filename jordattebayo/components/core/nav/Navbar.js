import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.navContainer}>
      <li className={styles.navLinkContainer}>
        <Link href="/">
          <a className={styles.navLinkHome} tabIndex="0">
            <span>Home</span>
          </a>
        </Link>
      </li>
      <li className={styles.navLinkContainer}>
        <Link href="/about">
          <a className={styles.navLinkAbout} tabIndex="1">
            <span>About</span>
          </a>
        </Link>
      </li>
      <li className={styles.navLinkContainer} tabIndex="2">
        <a
          className={styles.navLinkGit}
          href="https://www.github.com/jordattebayo"
          target="_blank"
        >
          <span>GitHub</span>
        </a>
      </li>
      <li className={styles.navLinkContainer} tabIndex="3">
        <Link href="/#projects">
          <a className={styles.navLinkProjects}>
            <span>Projects</span>
          </a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
