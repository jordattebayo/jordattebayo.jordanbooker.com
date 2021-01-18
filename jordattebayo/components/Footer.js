import { useState } from 'react'
import styles from "./footer.module.css";

export default function AboutPage() {

  const [email, setEmail] = useState("")
  const [state, setState] = useState("IDLE")
  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <footer className={styles.footer}>
      <p className={styles.ftText}>┻━┻ ︵ ¯\ (ツ)/¯ ︵ ┻━┻</p>
      <h6 className={styles.ftText}>Jordan Booker &copy;2020</h6>
    </footer>
  );
}
