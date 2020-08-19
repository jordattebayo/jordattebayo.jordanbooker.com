import styles from "./projectCard.module.css";

class ProjectCard extends React.Component {
  componentDidMount() {
    this.accordion();
  }

  accordion = () => {
    const acc = document.getElementById("accordion");
    acc.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  };

  render() {
    const {
      title,
      image,
      role,
      difficulties,
      solution,
      features,
      tech,
    } = this.props;

    return (
      <React.Fragment>
        <button id="accordion" className={styles.btn}>
          {title}
        </button>
        <div className={styles.container}>
          <h3 className={styles.titleText}>{title}</h3>
          <div className={styles.info}>
            <a className={styles.imgLink}>
              <img className={styles.proImg} src={image} />
            </a>
            <div className={styles.textContainer}>
              <p className={styles.text}>Role: {role}</p>
              <p className={styles.text}>
                Project Difficulties: {difficulties}
              </p>
              <p className={styles.text}>My Solution: {solution}</p>
              <p className={styles.text}>Notable Features: {features}</p>
              <p className={styles.text}>Technologies Used: {tech}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
