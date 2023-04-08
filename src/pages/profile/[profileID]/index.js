import Head from "next/head";
import { useRouter } from "next/router";

export default function ProfileID() {
  let router = useRouter();

  return (
    <>
      <Head>
        <title>Next.js Tutorial</title>
        <meta name="description" content="This is a Next.js Tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>This is the Profile Page of {router?.query?.profileID}!</h2>
      </div>
    </>
  );
}
