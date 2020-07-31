import Resume from "../components/Resume";
import styles from "./main.module.css";
import ContactButton from "./ContactButton";
import ThemeShape from "./ThemeShape";
import Projectsholder from "./Projectsholder";

export default function Home() {
  return (
    <main className={styles.mainB}>
      <div className={styles.mainContainer}>
        <h1 className={styles.introText}>Hello</h1>
        <div className={styles.introContainer}>
          <p className={styles.text}>
            My name is Jordan, I'm a Front End Developer. <br />
            <br /> My big dream is to create thoughtful, inclusive, and durable
            web applications that help people. Feel free to check out some of my
            projects I've made along my journey below.
          </p>
        </div>
      </div>
      <ContactButton />
      <ThemeShape />
      <Projectsholder />
      <Resume />
    </main>
  );
}
