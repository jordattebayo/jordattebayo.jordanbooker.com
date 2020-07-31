import styles from "./projectCard.module.css";

export default function ProjectCard() {
  return (
    <div className={styles.pContainer}>
      <p className={styles.pText}>Project 1</p>
      <p>
        I am constantly adding things so feel free to come back and check on
        things. Hopefully you'll come back and check it out!
      </p>
    </div>
  );
}
