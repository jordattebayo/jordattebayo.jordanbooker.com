import ReactDOM from "react-dom";
import styles from "./projectsholder.module.css";
import ProjectCard from "./ProjectCard";

const projectData = [
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
class Projectsholder extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.setState({ projects: [...this.state.projects, ...projectData] });
    this.showProjects();
  }

  toggleProject = (id) => {
    this.setState({
      projects: this.props.projects.map((project) => {
        if (project.id === id) {
          project.showing = !project.showing;
        }
        return project;
      }),
    });
  };

  showProjects = () => {
    if (projects.length > 0) {
      const allProjects = [];
      const { projects } = this.state;
      console.log(projects);
      for (let p of projects) {
        allProjects.push(
          <ProjectCard key={p.id} toggleProject={this.toggleProject} data={p} />
        );
      }
      console.log(allProjects);
      ReactDOM.render(allProjects, document.getElementById("pContainer"));
    }
  };
  render() {
    return (
      <main className={styles.mainB}>
        <div className={styles.mainContainer}>
          <a className={styles.link} id="projects">
            <h1 className={styles.introText}>Projects</h1>
          </a>

          <p className={styles.text}>
            It has been a lot of fun refactoring my projects into live versions
            for everyone to see. Please reach out if you have any questions or
            just want to chat!
          </p>
        </div>
        <div id="pContainer" className={styles.pCardContainer}></div>
      </main>
    );
  }
}

export default Projectsholder;
