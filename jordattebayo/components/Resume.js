import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resContainer}>
      <p className={styles.resText}>
        If you're interested in learning more about my career:
      </p>
      <a
        href="/Jordan_Booker_Resume_July2020.pdf"
        download="Jordan_Booker_Resume"
      >
        <button className={styles.btn}>Download Resume</button>
      </a>
    </div>
  );
}
