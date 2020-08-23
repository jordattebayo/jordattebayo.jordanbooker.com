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
      title: "React Line Chart",
      image: "/chartScreenshot.jpg",
      role: "Developer/Designer",
      difficulties:
        "Creating logic to graphically represent differences in dynamically loaded content",
      solution:
        "Use a variety of sorting functions and algorithms to parse incoming data using as few fixed numbers as possible",
      features: "Dynamically builds line chart",
      tech: "JavaScript, React, Emotion",
      live: "https://slate.host/_/stats",
      git:
        "https://github.com/filecoin-project/slate/tree/main/components/stats",
    },
    {
      id: "2",
      title: "Travel Planner App",
      image: "/plannerScreenshot.jpg",
      role: "Designer/Developer",
      difficulties: "API calls dependent on other API calls",
      solution:
        "Usilize local storage and a set timeout function to store data and run subsequent API calls",
      features:
        "Local storage paired with service workers to hold planned data even after user exits the browser",
      tech: "HTML, SASS, JavaScript, NodeJs, ExpressJS, Webpack, Babel",
      live: "",
      git: "https://github.com/jordattebayo/Travel-Planner-App",
    },
    {
      id: "3",
      title: "Evaluate News NLP",
      image: "/languageScreenshot.jpg",
      role: "Designer/Developer",
      difficulties:
        "Making sure that text submitted was valid to pass along to Aylien API",
      solution:
        "Used regular expressions and JavaScript uri methods to validate text",
      features:
        "Uses language processing to provide feedback on statements submitted",
      tech: "HTML, SASS, JavaScript, NodeJs, ExpressJS, Webpack",
      live: "",
      git:
        "https://github.com/jordattebayo/fend/tree/refresh-2019/projects/evaluate-news-nlp",
    },
    {
      id: "4",
      title: "Weather Journal App",
      image: "/weatherScreenshot.jpg",
      role: "Designer/Developer",
      difficulties: "Understanding API calls",
      solution: "Use tutorials available online to build personal API's",
      features:
        "Provides current weather and records it with each journal entry",
      tech: "HTML, CSS, JavaScript, NodeJS",
      live: "",
      git:
        "https://github.com/jordattebayo/fend/tree/refresh-2019/projects/weather-journal-app",
    },
    {
      id: "5",
      title: "Photo Blog",
      image: "/blogScreenshot.JPG",
      role: "Designer/Developer",
      difficulties: "Layout and design of photos within article",
      solution:
        "Utilized large size photos to pause the reader while still showing some text to indicate there is more to read.",
      features: "General layout for posts and home page",
      tech: "HTML, CSS",
      live: "",
      git: "https://github.com/jordattebayo/Udacity-Blog-Project",
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
