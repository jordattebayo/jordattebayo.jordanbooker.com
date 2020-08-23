import styles from "./about.module.css";
import ThemeShape from "../core/themeShapes/ThemeShape";
import ContactButton from "../main/contact/ContactButton";

export default function AboutPage() {
  return (
    <main className={styles.mainB}>
      <div className={styles.mainContainer}>
        <h1 className={styles.introText}>About</h1>

        <p className={styles.text}>
          I am Frontend Web Developer with Full Stack dreams. I love so much
          about the web and want to do my best in building it out further into
          the unknown.
        </p>
        <p className={styles.text}>
          My objective is to create thoughtful, long lasting, and inclusive web
          applications that help users share knowledge. If you have questions or
          would like to learn more about me, please reach out!
        </p>
      </div>
      <ContactButton />
      <ThemeShape />
    </main>
  );
}
