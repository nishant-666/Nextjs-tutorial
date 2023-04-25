import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "@/components/Footer";

export default function Login() {
  return (
    <>
      <Head>
        <title>Next.js Tutorial</title>
        <meta name="description" content="This is a Next.js Tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>LOGIN PAGE!!!!!</h1>
      </div>
    </>
  );
}

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
