import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/header";
import RegistrationForm from "../components/registration-form/registration-form";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Atelier Disko Coding Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageName="Sign up" />
      <RegistrationForm />
    </>
  );
};
export default Signup;