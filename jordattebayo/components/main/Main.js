import Resume from "../core/resume/Resume";
import styles from "./main.module.css";
import ContactButton from "./contact/ContactButton";
import ThemeShape from "../core/themeShapes/ThemeShape";
import Projectsholder from "./projects/Projectsholder";
import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main className={styles.mainB}>
        <div>
          <div className={styles.mainContainer}>
            <h1 className={styles.introText}>Hello</h1>
            <div className={styles.introContainer}>
              <p className={styles.text}>
                My name is Jordan, I'm a Front End Developer. <br />
                <br /> My big dream is to create thoughtful, inclusive, and
                durable web applications that help people. Feel free to check
                out some of my projects I've made below.
              </p>
            </div>
          </div>
          <ContactButton />
          <ThemeShape />
        </div>
        <Projectsholder />
        <Resume />
      </main>
    );
  }
}

export default Home;
