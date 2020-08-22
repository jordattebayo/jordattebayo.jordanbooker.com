import ReactDOM from "react-dom";
import styles from "./projectsholder.module.css";
import ProjectCard from "./ProjectCard";

class Projectsholder extends React.Component {
  componentDidMount() {
    this.showProjects();
  }

  projectData = [
    {
      id: "1",
      showing: "false",
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
      id: "2",
      showing: "false",
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
      id: "3",
      showing: "false",
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
      id: "4",
      showing: "false",
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
      id: "5",
      showing: "false",
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

  showProjects = () => {
    const allProjects = [];
    const projects = this.projectData;
    for (let p of projects) {
      allProjects.push(<ProjectCard key={p.id} data={p} />);
    }
    ReactDOM.render(allProjects, document.getElementById("pContainer"));
  };

  render() {
    return (
      <main className={styles.mainB}>
        <div className={styles.mainContainer}>
          <a className={styles.link} id="projects">
            <h1 className={styles.introText}>Projects</h1>
          </a>
        </div>
        <div id="pContainer" className={styles.pCardContainer}></div>
      </main>
    );
  }
}

export default Projectsholder;
