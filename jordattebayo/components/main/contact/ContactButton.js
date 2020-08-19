import { Component } from "react";
import styles from "./contactbutton.module.css";

export default class ContactButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false,
    };
  }

  showEmail = () => {
    this.setState((prevState) => ({ buttonClicked: !prevState.buttonClicked }));
  };

  render() {
    return (
      <div className={styles.btnContainer}>
        {this.state.buttonClicked ? (
          <div className={styles.contactText}>
            Email: jordan@jordanbooker.com
          </div>
        ) : null}

        <button className={styles.contactBtn} onClick={() => this.showEmail()}>
          <a>
            <span>Contact</span>
          </a>
        </button>
      </div>
    );
  }
}
