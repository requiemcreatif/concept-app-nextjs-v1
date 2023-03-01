import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Concept app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className=" text-3xl font-bold underline">Hello Concept next</h1>
    </div>
  );
}
