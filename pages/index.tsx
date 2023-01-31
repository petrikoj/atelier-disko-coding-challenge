import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/header";
import RegistrationForm from "../components/registration-form/registration-form";
import styles from "../styles/index.module.css";
import layout from "../styles/layout.module.css";
import typography from "../styles/typography.module.css";
import cx from "classix";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Atelier Disko Coding Challenge</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header />

          <div className={cx(layout.container, layout.grid)}>
            <RegistrationForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
