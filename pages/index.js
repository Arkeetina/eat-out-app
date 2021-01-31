import Head from "next/head";
import dynamic from "next/dynamic";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import LinkPreview from "../components/LinkPreview";
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
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div>
            <form className="flex flex-col">
              <div className="mt-4 mb-4">
                <h2 className="text-3xl text-gray-800">Add new place</h2>
              </div>
              <div className="mt-2 mb-2">
                <Input placeHolder="Name" />
              </div>
              <div className="mt-2 mb-2">
                <Input placeHolder="Url" />
              </div>
              <div className="mt-2 mb-2">
                <Textarea rows="4" cols="30" placeHolder="Note" />
              </div>
            </form>
          </div>
          <div>
            <div className="mt-4 mb-4">
              <h2 className="text-3xl text-gray-800">Saved places</h2>
            </div>
            <div className="relative  shadow-lg flex leading-none rounded-lg p-4">
              <div className="bg-white overflow-hidden flex w-full">
                <div>
                  <p className="mt-4 mb-4 font-bold">Meno male</p>
                  <p className="mt-4 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <LinkPreview url="http://www.menomale.se/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
