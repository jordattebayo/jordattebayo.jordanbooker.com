import { useState } from 'react'
import styles from "./footer.module.sass";
import axios from "axios"

export default function AboutPage() {

  const [email, setEmail] = useState("")
  const [state, setState] = useState("IDLE")
  const [errorMessage, setErrorMessage] = useState(null)

  const subscribe = async () => {
    setState("LOADING")
    setErrorMessage(null)
    try {
      const response = await axios.post("/api/newsletter", { email })
      setState("SUCCESS")
    } catch (e) {
      setErrorMessage(e.response.data.error)
      setState("ERROR")
    }
  }

  const _handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      subscribe
    }
    return null
  }

  const reset = () => {
    setState("")
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.ctaText}>If you're picking up what I'm putting down join my mailing list.</p>
        <div className={styles.inputContainer}>
        {state === "IDLE" | state === "" &&
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />}
          {state === "ERROR" && <p className={styles.errorMsg}>{errorMessage}</p>}
          {state === "SUCCESS" && <p className={styles.successMsg}>Woot! You're in ヾ(⌐■_■)ノ</p>}
        {state === "SUCCESS" | state === "ERROR" ?
          <button
            type="button"
            disabled={state === "LOADING"}
            onClick={reset}
            className={styles.btn}
          >
            {state === "SUCCESS" ? "Add another??" : "Try again?"}
          </button> :
          <button
            type="button"
            disabled={state === "LOADING"}
            onClick={subscribe}
            onKeyUp={(event) => _handleKeyUp(event)}
            className={styles.btn}
          >
            {state === "LOADING" ? "Loading" :"Subscribe"}
          </button>
        }
        </div>
      </div>
      <p className={styles.ftText}>┻━┻ ︵ ¯\ (ツ)/¯ ︵ ┻━┻</p>
      <h6 className={styles.ftText}>Jordan Booker &copy;2020</h6>
    </footer>
  );
}
