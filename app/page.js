"use client";
import { Card, Input, Button, CardHeader } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import ResultPanel from "./../components/ResultPanel";
import LyricsContainer from "./../components/LyricsContainer";
import DetailsPanel from "./../components/DetailsPanel";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";

const variants = {
  open: { y: "45vh" },
  closed: { y: "0vh" },
};

const Home = () => {
  const [data, setData] = useState();
  const [path, setPath] = useState("initial");
  const [query, setQuery] = useState();

  const input = useRef();

  useEffect(() => {
    fetch(`/api/search?q=${query}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      })
      .catch(() => {
        setData(undefined);
      });
  }, [query]);

  return (
    <div>
      <motion.div
        initial={variants.open}
        animate={path === "initial" ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Card className={`mb-2  h-[100px] shadow-none`}>
          <CardHeader className=" w-full items-center m-3 justify-center">
            <div className="flex">
              <Input
                color="primary"
                ref={input}
                size="md"
                placeholder="Search songs ..."
                className="h-[15px]   w-[250px] sm:w-[400px]"
              />
              <Button
                className="my-1 mx-3"
                isIconOnly
                size="lg"
                color="primary"
                variant="ghost"
                onClick={() => {
                  setData(undefined);

                  setQuery(input.current.value.replace(/ /g, "%20"));
                  setPath("");
                }}
              >
                <AiOutlineSearch />
              </Button>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
      {path === "" ? (
        <ResultPanel data={data} setPath={setPath} />
      ) : path !== "initial" ? (
        <div className="flex flex-wrap">
          <DetailsPanel DATA={path} />
          <LyricsContainer DATA={path} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
