import Resume from "../components/Resume";
import styles from "./main.module.css";
import ContactButton from "./ContactButton";

export default function Home() {
  return (
    <main className={styles.mainB}>
      <div className={styles.mainContainer}>
        <h1 className={styles.introText}>Hello</h1>
        <div className={styles.introContainer}>
          <p className={styles.text}>
            You made it. Happy you came! o(^▽^)o ! This is my front page. For
            now there isn't much here but as I get time I'll update things.
            Hopefully you'll come back and check it out!
            <br />
          </p>
          <p className={styles.text}>
            Currently I am seeking freelance and fulltime opportunities in Front
            End Development. I have experience in HTML, CSS, JavaScript, React,
            and NodeJS. For any questions at all feel free to reach out to me!
          </p>
        </div>
      </div>
      <ContactButton />
      <Resume />
    </main>
  );
}
