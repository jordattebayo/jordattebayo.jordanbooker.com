import Head from "next/head";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Me</title>
      </Head>
      <main>
        <h1 className="title">About</h1>

        <p className="description">
          There isn't much here right now, come back real soon
        </p>
      </main>
    </div>
  );
}
