"use client";
import { Card, Input, Button, CardHeader } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import ResultPanel from "./../components/ResultPanel";
import LyricsContainer from "./../components/LyricsContainer";
import DetailsPanel from "./../components/DetailsPanel";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import PlayPanel from "@/components/PlayPanel";

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
    if (sessionStorage.getItem(query) === null) {
      setData(undefined);

      fetch(`/api/search?q=${query}`)
        .then((res) => res.json())
        .then((d) => {
          setData(d);
          sessionStorage.setItem(query, JSON.stringify(d));
        })
        .catch(() => {
          setData(undefined);
        });
    } else {
      setData(JSON.parse(sessionStorage.getItem(query)));
    }
  }, [query]);

  return (
    <div>
      <motion.div
        initial={variants.open}
        animate={path === "initial" ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`mb-2 py-5 w-full flex justify-center  h-[100px] rounded-none shadow-none`}
        >
          <div className="flex justify-evenly">
            <Input
              ref={input}
              size="md"
              placeholder="Search songs ..."
              className="h-[15px]   w-[250px] sm:w-[400px]"
            />
            <Button
              className="my-1 mx-3"
              isIconOnly
              size="lg"
              variant="ghost"
              onClick={() => {
                setQuery(input.current.value.replace(/ /g, "%20"));
                setPath("");
              }}
            >
              <AiOutlineSearch />
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </motion.div>
      {path === "" ? (
        <ResultPanel data={data} setPath={setPath} />
      ) : path !== "initial" ? (
        <div className="flex flex-wrap justify-center">
          <DetailsPanel DATA={path} />
          <LyricsContainer DATA={path} />
          <PlayPanel DATA={path} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
