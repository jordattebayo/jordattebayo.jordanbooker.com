import styles from "./about.module.css";
import ThemeShape from "./ThemeShape";

export default function AboutPage() {
  return (
    <main className={styles.mainB}>
      <div className={styles.mainContainer}>
        <h1 className={styles.introText}>About</h1>

        <p className={styles.text}>
          I got my start in web developement a few years ago when I was
          traveling across the country to eventually land in Seattle, WA.
          Regrettably I never got far in learning as I soon found myself in one
          of the most expensive cities in the country. In the interest of time I
          relied on my previous sales experience to land a good paying job to
          stay afloat in the tech city.
        </p>
        <p className={styles.text}>
          Fast forward 2 years I found myself back in NC. This time in Durham,
          even though I was just a salesman I felt drawn to tech. I stayed in
          sales and pivoted from selling copiers to selling IT Solutions. Then
          out of nowhere COVID-19 hit and I found myself unexpectedly looking
          for work. Using the time I was given I decided to open up those dusty
          Jon Duckett books. I fell in love and never looked back.
        </p>
      </div>

      <ThemeShape />
    </main>
  );
}
