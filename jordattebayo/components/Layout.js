import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import { Component } from "react";
import styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Esteban&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <title>Jordan Booker</title>
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
