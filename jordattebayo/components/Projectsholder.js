import styles from "./projectsholder.module.css";
import ProjectCard from "./ProjectCard";

export default function Projectsholder() {
  return (
    <main className={styles.mainB}>
      <div className={styles.mainContainer}>
        <a className={styles.link} id="projects">
          <h1 className={styles.introText}>Projects</h1>
        </a>

        <p className={styles.text}>
          It has been a lot of fun converting my old projects into live ones and
          putting them up for everyone to see. Please feel free to reach out if
          you have any questions or just want to chat!
        </p>
      </div>
      <div className={styles.pCardContainer}>
        <ProjectCard />
      </div>
    </main>
  );
}
