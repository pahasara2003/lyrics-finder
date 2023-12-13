"use client";
import { useState, useEffect } from "react";
import { CardHeader, CardFooter, Card, ScrollShadow } from "@nextui-org/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LyricsContainer = ({ DATA }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`/api/lyrics?path=${DATA.path}`)
      .then((res) => res.text())
      .then((text) => setData(text));
  }, []);

  return (
    <Card className="  shadow-none p-10  w-fit md:max-w-[500px] m-auto">
      <CardFooter className="min-h-[57vh]">
        {data !== undefined ? (
          <div dangerouslySetInnerHTML={{ __html: data }}></div>
        ) : (
          <ScaleLoader className="m-auto" />
        )}
      </CardFooter>
    </Card>
  );
};

export default LyricsContainer;
