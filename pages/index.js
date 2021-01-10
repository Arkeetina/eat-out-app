import Head from "next/head";

import dynamic from "next/dynamic";
import LinkPreview from "../components/LinkPreview";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LinkPreview url="https://www.google.com/maps/place/Arirang/@59.3406083,18.0602083,15z/data=!4m5!3m4!1s0x0:0x51710d0d953627!8m2!3d59.3406083!4d18.0602083?shorturl=1" />
      </main>
    </div>
  );
}
