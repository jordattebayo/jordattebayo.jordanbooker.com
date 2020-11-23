import styles from "./projectCard.module.css";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showProject: false };
  }

  toggleProject = () => {
    this.setState((prevState) => ({ showProject: !prevState.showProject }));
  };

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <button
          onClick={this.toggleProject}
          className={this.state.showProject ? styles.btnM : styles.btn}
        >
          {data.title}
        </button>
        {this.state.showProject ? (
          <div className={styles.container}>
            <button onClick={this.toggleProject} className={styles.closeBtn}>
              Close
            </button>
            <h3 className={styles.titleText}>{data.title}</h3>
            <div className={styles.info}>
              <div className={styles.imgC}>
                <img
                  className={styles.proImg}
                  src={data.image}
                  alt="Screenshot of application"
                />
              </div>
              <div className={styles.textContainer}>
                <p className={styles.text}>Role: {data.role}</p>
                <p className={styles.text}>
                  Project Difficulties: {data.difficulties}
                </p>
                <p className={styles.text}>My Solution: {data.solution}</p>
                <p className={styles.text}>Notable Features: {data.features}</p>
                <p className={styles.text}>Technologies Used: {data.tech}</p>
                <div className={styles.linkC}>
                  <p>
                    {data.live.length > 1 ? (
                      <a
                        className={styles.link}
                        href={data.live}
                        target="_blank"
                      >
                        Live
                      </a>
                    ) : (
                      <a
                        className={styles.linkCrossed}
                        href="#"
                        target="_blank"
                      >
                        Live
                      </a>
                    )}
                    |
                    {data.git.length > 1 ? (
                      <a
                        className={styles.link}
                        href={data.live}
                        target="_blank"
                      >
                        GitHub
                      </a>
                    ) : (
                      <a
                        className={styles.linkCrossed}
                        href="#"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    )}
                    {data.screenshots ? (
                      <span>
                        |<a
                          className={styles.link}
                          href={data.screenshots.desktop}
                          download={data.screenshots.desktop.toString()}
                        >
                          Desktop Screenshot
                        </a>|
                          <a
                          className={styles.link}
                          href={data.screenshots.tablet}
                          download={data.screenshots.tablet.toString()}
                        >
                          Tablet Screenshot
                        </a>|
                        <a
                          className={styles.link}
                          href={data.screenshots.mobile}
                          download={data.screenshots.mobile.toString()}
                        >
                          Mobile Screenshot
                        </a>
                      </span>
                    ) : (
                      null
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default ProjectCard;
