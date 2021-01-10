import Head from "next/head";

import dynamic from "next/dynamic";
const ReactTinyLink = dynamic(
  () => import("react-tiny-link").then((mod) => mod.ReactTinyLink),
  { ssr: false }
);

const LinkPreview = ({ url, cardSize = "small" }) => {
  return (
    <ReactTinyLink
      cardSize={cardSize}
      showGraphic={true}
      maxLine={2}
      minLine={1}
      url={url}
    />
  );
};
export default LinkPreview;
