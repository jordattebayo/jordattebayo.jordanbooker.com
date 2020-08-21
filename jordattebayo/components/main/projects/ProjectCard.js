import styles from "./projectCard.module.css";

class ProjectCard extends React.Component {
  projectStyle = () => {
    if (this.props) {
      return {
        width: "80%",
        backgroundColor: "var(--color-senary)",
        alignSelf: "center",
        transition: "max-height 0.2s ease-out",
      };
    } else {
      return {
        width: "80%",
        backgroundColor: "var(--color-senary)",
        padding: "3% 5%",
        margin: "2%",
        alignSelf: "center",
        maxHeight: "0",
        overflow: "hidden",
        transition: "max-height 0.2s ease-out",
      };
    }
  };

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <React.Fragment>
        <button
          onClick={this.props.toggleProject.bind(this, data.id)}
          className={styles.btn}
        >
          {data.title}
        </button>
        <div className={this.projectStyle}>
          <h3 className={styles.titleText}>{data.title}</h3>
          <div className={styles.info}>
            <a className={styles.imgLink}>
              <img className={styles.proImg} src={data.image} />
            </a>
            <div className={styles.textContainer}>
              <p className={styles.text}>Role: {data.role}</p>
              <p className={styles.text}>
                Project Difficulties: {data.difficulties}
              </p>
              <p className={styles.text}>My Solution: {data.solution}</p>
              <p className={styles.text}>Notable Features: {data.features}</p>
              <p className={styles.text}>Technologies Used: {data.tech}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
