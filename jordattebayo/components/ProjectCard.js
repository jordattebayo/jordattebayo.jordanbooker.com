import styles from "./projectCard.module.css";

export default function ProjectCard() {
  return (
    <div className={styles.container}>
      <h3 className={styles.titleText}>Project Name</h3>
      <div className={styles.info}>
        <a className={styles.imgLink}>
          <img
            className={styles.proImg}
            src="https://cdn.pixabay.com/photo/2020/06/18/07/56/railing-5312344_960_720.jpg"
          />
        </a>
        <div className={styles.textContainer}>
          <p className={styles.text}>Role: Something</p>
          <p className={styles.text}>Project Difficulties: Something</p>
          <p className={styles.text}>My Solution: Something</p>
          <p className={styles.text}>Notable Features: Something</p>
          <p className={styles.text}>Technologies Used: HTML, CSS, Boostrap</p>
        </div>
      </div>
    </div>
  );
}
