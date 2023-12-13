"use client";
import React from "react";
import * as cheerio from "cheerio";

const Page = async ({ params }) => {
  const data = await fetch(`https://genius.com/${params.title}-lyrics`).then(
    (res) => res.text()
  );

  const html = cheerio.load(data);
  const div = html("[data-lyrics-container='true']").html();

  return (
    <div>
      <h1>{params.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: div }}></div>;
    </div>
  );
};

export default Page;
