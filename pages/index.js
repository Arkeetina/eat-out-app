import Head from "next/head";
import dynamic from "next/dynamic";
import LinkPreview from "../components/LinkPreview";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Label from "../components/Label";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eat out app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <form className="flex flex-col">
          <Label value="Name" />
          <Input />

          <Label value="Url" />
          <Input />

          <Label value="Note" />
          <Textarea />
        </form>
      </main>
    </div>
  );
}
