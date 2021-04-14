import Head from "next/head";
import dynamic from "next/dynamic";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import LinkPreview from "../components/LinkPreview";
import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from "react";

export default function Home() {
  const [eatoutPlaceList, setEatOutPlaceList] = useState([]);
  const [newPlace, setNewPlace] = useState({ url: "", name: "", note: "" });
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
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const newValue = [...eatoutPlaceList, newPlace];

                setEatOutPlaceList(newValue);
                setNewPlace({ url: "", name: "", note: "" });
              }}
              className="flex flex-col"
            >
              <div className="mt-4 mb-4">
                <h2 className="text-3xl text-gray-800">Add new place</h2>
              </div>
              <div className="mt-2 mb-2">
                <Input
                  onChange={(event) =>
                    setNewPlace({ ...newPlace, name: event.target.value })
                  }
                  value={newPlace.name}
                  placeHolder="Name"
                />
              </div>
              <div className="mt-2 mb-2">
                <Input
                  onChange={(event) =>
                    setNewPlace({ ...newPlace, url: event.target.value })
                  }
                  value={newPlace.url}
                  placeHolder="Url"
                />
              </div>
              <div className="mt-2 mb-2">
                <Textarea
                  rows="4"
                  cols="30"
                  onChange={(event) =>
                    setNewPlace({ ...newPlace, note: event.target.value })
                  }
                  value={newPlace.note}
                  placeHolder="Note"
                />
              </div>
              <div className="mt-2 mb-2">
                <Button
                  onClick={() => {}}
                  type="submit"
                  label={<span>Add</span>}
                />
              </div>
            </form>
          </div>
          <div>
            <div className="mt-4 mb-4">
              <h2 className="text-3xl text-gray-800">Saved places</h2>
            </div>
            <div className="relative flex flex-col">
              {eatoutPlaceList.map(({ name, url, note }) => {
                return (
                  <div className="relative mb-4 shadow-lg flex flex-col  leading-none rounded-lg p-4">
                    <div className="bg-white overflow-hidden flex flex-col w-full">
                      <p className="mt-4 mb-4 font-bold">{name}</p>
                      <p className="mt-4 mb-4">{note}</p>
                      <LinkPreview url={url} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
