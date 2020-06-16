import Layout from "../components/Layout";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <div className="container">
      <Layout>
        <main>
          <h1 className="title">Hello</h1>

          <p className="description">
            You made it. Happy you came! This is my front page. For now there
            isn't much here but as I get time I'll update things. Hopefully if
            you have time you can come back to check it out! <br />
          </p>
          <p className="jbpost">
            Currently I am seeking freelance and fulltime opportunities in Front
            End web technologies. I have experience in HTML, CSS, JavaScript,
            React, and NodeJS. For any questions at all feel free to reach out
            to me!
          </p>
          <a>
            <button className="cbtn">Contact</button>
          </a>
          <Resume />
        </main>
      </Layout>
    </div>
  );
}
