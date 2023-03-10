import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/header";
import styles from "../styles/index.module.css";
import Link from "next/link";
import Button from "../components/button/button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Atelier Disko Coding Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header pageName="Welcome!" />
        <div className={styles.ctas}>
          <Link href="/signup" passHref>
            <a>
              <Button>Sign up</Button>
            </a>
          </Link>
          <Link href="/registration/all" passHref>
            <a>
              <Button>Users</Button>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
