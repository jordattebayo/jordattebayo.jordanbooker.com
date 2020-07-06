import styles from "./resume.module.css";
import ThemeShape from "./ThemeShape";

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <ThemeShape />
      <div className={styles.resTitle}>
        <h2 className={styles.resTitleText}>Resumè</h2>
        <p className={styles.resMis}>
          Hardworking, motivated, and creative Front End Developer with a client
          focus.
        </p>
      </div>
      <div className={styles.resMain}>
        <h4 className={styles.resHd}>Experience</h4>
        <div>
          <span className={styles.resDate}>DECEMBER 2019 – MARCH 2020</span>
          <h6 className={styles.resLgText}>
            IT SALES CONSULTANT, CEI THE DIGITAL OFFICE, DURHAM, NC
          </h6>
          <ul className={styles.resText}>
            <li>Generate new business using a variety of prospecting tools</li>
            <li>
              Schedule appointments, prepare presentations, proposals,
              demonstrate equipment, and develop solutions that demonstrate
              value added benefits to customers
            </li>
            <li>
              Identify and properly qualify potential prospects and customers
            </li>
            <li>
              Listen and understand customer needs and requirements with high
              priority on customer satisfaction
            </li>
            <li>Maintain knowledge of company and competitor’s equipment</li>
          </ul>
        </div>
        <div className="xp">
          <span className={styles.resDate}>FEBRUARY 2018 – SEPTEMBER 2019</span>
          <h6 className={styles.resLgText}>
            FIELD SALES MANAGER, PACIFIC OFFICE AUTOMATION, SEATTLE, WA
          </h6>
          <ul className={styles.resText}>
            <li>Promoted to Sales Manager in less than 1 year. </li>
            <li>
              Developed a territory in a start-up branch within a mature market
              in a declining industry.
            </li>
            <li>
              Maintained annual quota and budget with no ramp up or grace
              period.
            </li>
            <li>Maintained 100% client retention.</li>
            <li>
              Mapped and prospected for new clients while maintaining and
              expanding relationships with existing clients.
            </li>
          </ul>
        </div>
        <div>
          <h4 className={styles.resHd}>Education</h4>
          <p className={styles.resDate}>June 2020</p>
          <h6 className={styles.resLgText}>Front End Developer, Udacity</h6>
          <p className={styles.resText}>- Pending Certificate</p>
          <p className={styles.resDate}>DECEMBER 2012</p>
          <h6 className={styles.resLgText}>
            BUSINESS ADMINISTRATION, UNC GREENSBORO
          </h6>
          <p className={styles.resText}>
            - Bachelor of Science in Business Administration with a
            concentration in entrepreneurship
          </p>
        </div>
        <div>
          <h4 className={styles.resHd}>Activities</h4>
          <p className={styles.resText}>
            - Outdoor adventuring such as hiking, camping, and cycling.
            Traveling. Playing guitar and making music. Photography.{" "}
          </p>
        </div>
        <h4 className={styles.resHd}>Awards</h4>
        <p className={styles.resDate}>July 2008</p>
        <h6 className={styles.resLgText}>EAGLE SCOUT/ BOY SCOUTS OF AMERICA</h6>
        <p className={styles.resText}>- Attained rank of Eagle in scouting.</p>
      </div>
    </div>
  );
}
