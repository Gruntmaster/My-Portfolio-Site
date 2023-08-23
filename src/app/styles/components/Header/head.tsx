import Head from "next/head";
import React from "react";

const MyHead: React.FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content="My Portfolio website" />
      <meta name="keywords" content="web design, html, css, js" />
      <title>Portfolio Website</title>
    </Head>
  );
};

export default MyHead;
