import ReactDOM from "react-dom";
import styles from "./projectsholder.module.css";
import ProjectCard from "./ProjectCard";

class Projectsholder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.showProjects();
  }

  showProjects = () => {
    const allProjects = [];
    const { data } = this.props;
    console.log(data);
    for (let p of data) {
      allProjects.push(
        <ProjectCard
          key={p.id}
          title={p.title}
          image={p.image}
          role={p.role}
          difficulties={p.difficulties}
          solution={p.solution}
          features={p.features}
          tech={p.tech}
        />
      );
    }
    console.log(allProjects);
    ReactDOM.render(allProjects, document.getElementById("pContainer"));
  };

  render() {
    return (
      <main className={styles.mainB}>
        <div className={styles.mainContainer}>
          <a className={styles.link} id="projects">
            <h1 className={styles.introText}>Projects</h1>
          </a>

          <p className={styles.text}>
            It has been a lot of fun converting my old projects into live ones
            and putting them up for everyone to see. Please feel free to reach
            out if you have any questions or just want to chat!
          </p>
        </div>
        <div id="pContainer" className={styles.pCardContainer}></div>
      </main>
    );
  }
}

export default Projectsholder;
