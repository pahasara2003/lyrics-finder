"use client";
import { useState, useEffect } from "react";
import { CardFooter, Card, ScrollShadow } from "@nextui-org/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useTheme } from "next-themes";

const LyricsContainer = ({ DATA }) => {
  const { theme, setTheme } = useTheme();

  const [data, setData] = useState();

  useEffect(() => {
    if (localStorage.getItem(`lyrics_${DATA.data.id}`) == null) {
      fetch(`/api/lyrics?id=${DATA.data.id}`)
        .then((res) => res.text())
        .then((text) => {
          setData(text);
          localStorage.setItem(`lyrics_${DATA.data.id}`, text);
        });
    } else {
      setData(localStorage.getItem(`lyrics_${DATA.data.id}`));
    }
  }, []);

  return (
    <div className=" p-3  mx-3 shadow-lg rounded-lg">
      <p className="text-center font-semibold text-2xl py-3">Lyrics</p>
      <ScrollShadow className="md:h-[70vh] w-full py-1 md:w-[50vw] lg:w-[30vw]">
        <Card className="  shadow-none p-10  w-fit md:max-w-[500px] m-auto">
          <CardFooter className="min-h-[57vh]">
            {data !== undefined ? (
              <div dangerouslySetInnerHTML={{ __html: data }}></div>
            ) : (
              <ScaleLoader
                color={theme === "dark" ? "white" : "black"}
                className="m-auto"
              />
            )}
          </CardFooter>
        </Card>
      </ScrollShadow>
    </div>
  );
};

export default LyricsContainer;
