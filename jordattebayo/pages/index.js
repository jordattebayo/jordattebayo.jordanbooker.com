import { useSpring, animated, config } from "react-spring"

import Layout from "../components/Layout";
import Resume from "../components/Resume";
import ContactButton from "../components/ContactButton";
import ThemeShape from "../components/ThemeShape";
import Projects from "../components/Projects";

const _projectData = [
  {
    id: "1",
    title: "Lee® Indigood",
    image: "/desktopLeeIndigoodMock.png",
    role: "Developer",
    difficulties:
      "Creating responsive layouts between mobile, tablet, and desktop views.",
    solution:
      "Using Bootstrap's grid system to create responsive layouts based on popular viewport breakpoints.",
    features: "Responsive layout",
    tech: "Bootstrap, Salesfoce Commerce Cloud, HTML, CSS",
    live: "",
    git:"",
    screenshots: {
      desktop: "/desktopLeeIndigood.jpg",
      tablet: "/tabletLeeIndigood.jpg",
      mobile: "/mobileLeeIndigood.jpg",
    }
  },
  {
    id: "2",
    title: "React Line Chart",
    image: "/chartScreenshot.jpg",
    role: "Developer/Designer",
    difficulties:
      "Creating logic to graphically represent differences in dynamically loaded content",
    solution:
      "Use a variety of sorting functions and algorithms to parse incoming data using as few fixed numbers as possible",
    features: "Dynamically builds line chart",
    tech: "JavaScript, React, Emotion",
    live: "https://slate.host/_/system/line-chart",
    git:
      "https://github.com/filecoin-project/slate/tree/main/components/stats",
  },
  {
    id: "3",
    title: "Travel Planner App",
    image: "/travel-app.gif",
    role: "Designer/Developer",
    difficulties: "API calls dependent on other API calls",
    solution:
      "Utilize local storage and a set timeout function to store data and run subsequent API calls",
    features:
      "Local storage paired with service workers to hold planned data even after user exits the browser",
    tech: "HTML, SASS, JavaScript, NodeJs, ExpressJS, Webpack, Babel",
    live: "http://jordattebayos-travel-planner.herokuapp.com/",
    git: "https://github.com/jordattebayo/Travel-Planner-App",
  },
  {
    id: "4",
    title: "Evaluate News NLP",
    image: "/languageScreenshot.JPG",
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
    id: "5",
    title: "Weather Journal App",
    image: "/weatherScreenshot.JPG",
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
    id: "6",
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

export default function Home() {

  const props = useSpring({
    to: {opacity: 1},
    from: {opacity: 0}, 
    config: config.molasses,
    delay: 100,
  })

  const props2 = useSpring({
    to: {opacity: 1},
    from: {opacity: 0}, 
    config: config.molasses,
    delay: 500, 
  })

  return (
    <Layout>
      <main className="grid">
        <div>
          <div className="hero-container">
            <animated.h1 style={props} className="hero-heading">Hello</animated.h1>
            <div className="hero-subheading--container">
              <animated.p style={props2} className="hero-subheading">
                My name is Jordan, I'm a Frontend Web Developer. <br />
                <br /> My big dream is to create thoughtful, inclusive, and
                durable web applications that help people. Feel free to check out
                some of my projects I've made below.
              </animated.p>
            </div>
          </div>
          <ContactButton />
          <ThemeShape />
        </div>
        <Projects projectData={_projectData}/>
        <Resume />
      </main>
    </Layout>
  );
}
