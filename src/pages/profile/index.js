import Head from "next/head";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Next.js Tutorial</title>
        <meta name="description" content="This is a Next.js Tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>This is the Profile Page!</h2>

        <Link href={"/"}>
          <p>Go to the Home Page!</p>
        </Link>
      </div>
    </>
  );
}
