import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Tutorial</title>
        <meta name="description" content="This is a Next.js Tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button>Click me!</button>

        <h1 className={styles.heading}>Hello, World!!!!!!!!</h1>
      </div>
    </>
  );
}
