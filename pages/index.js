import Head from "next/head";
import dynamic from "next/dynamic";
import LinkPreview from "../components/LinkPreview";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Label from "../components/Label";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
