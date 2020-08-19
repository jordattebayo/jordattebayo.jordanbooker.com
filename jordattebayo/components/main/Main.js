import Resume from "../core/resume/Resume";
import styles from "./main.module.css";
import ContactButton from "./contact/ContactButton";
import ThemeShape from "../core/themeShapes/ThemeShape";
import Projectsholder from "./projects/Projectsholder";

const projectData = [
  {
    id: 1,
    title: "React Chart",
    image:
      "https://cdn.pixabay.com/photo/2020/06/18/07/56/railing-5312344_960_720.jpg",
    role: "Developer",
    difficulties: "Accurately ",
    solution: "",
    features: "Dynamically Builds Chart",
    tech: "JavaScript, React, Emotion",
  },
  {
    id: 2,
    title: "TBD",
    image:
      "https://cdn.pixabay.com/photo/2020/06/18/07/56/railing-5312344_960_720.jpg",
    role: "Dev",
    difficulties: "None",
    solution: "Just smart",
    features: "Only the best",
    tech: "All",
  },
  {
    id: 3,
    title: "TBD",
    image:
      "https://cdn.pixabay.com/photo/2020/06/18/07/56/railing-5312344_960_720.jpg",
    role: "Dev",
    difficulties: "None",
    solution: "Just smart",
    features: "Only the best",
    tech: "All",
  },
  {
    id: 4,
    title: "TBD",
    image:
      "https://cdn.pixabay.com/photo/2020/06/18/07/56/railing-5312344_960_720.jpg",
    role: "Dev",
    difficulties: "None",
    solution: "Just smart",
    features: "Only the best",
    tech: "All",
  },
  {
    id: 5,
    title: "TBD",
    image:
      "https://cdn.pixabay.com/photo/2020/06/18/07/56/railing-5312344_960_720.jpg",
    role: "Dev",
    difficulties: "None",
    solution: "Just smart",
    features: "Only the best",
    tech: "All",
  },
];

export default function Home() {
  return (
    <main className={styles.mainB}>
      <div>
        <div className={styles.mainContainer}>
          <h1 className={styles.introText}>Hello</h1>
          <div className={styles.introContainer}>
            <p className={styles.text}>
              My name is Jordan, I'm a Front End Developer. <br />
              <br /> My big dream is to create thoughtful, inclusive, and
              durable web applications that help people. Feel free to check out
              some of my projects I've made below.
            </p>
          </div>
        </div>
        <ContactButton />
        <ThemeShape />
      </div>
      <Projectsholder data={projectData} />
      <Resume />
    </main>
  );
}
