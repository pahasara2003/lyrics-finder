import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  AvatarGroup,
  Tooltip,
  Avatar,
  Image,
} from "@nextui-org/react";
import { FaSpotify, FaYoutube, FaSoundcloud } from "react-icons/fa";
import Link from "next/link";

const providers = ["spotify", "youtube", "soundcloud"];
const icons = [<FaSpotify />, <FaYoutube />, <FaSoundcloud />];

const PlayPanel = ({ DATA }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const song = localStorage.getItem(`song_${DATA.data.id}`);
    if (song === null) {
      fetch(`/api/song?id=${DATA.data.id}`)
        .then((result) => result.json())
        .then((data) => {
          setData(data);
          localStorage.setItem(`song_${DATA.data.id}`, JSON.stringify(data));
        });
    } else {
      setData(JSON.parse(song));
    }
  }, []);

  return (
    <div className="lg:w-[25vw] w-[70vw] lg:m-0 my-5">
      {data !== undefined ? (
        <Card className="">
          {data.album !== null && (
            <CardHeader className="p-5 flex-col">
              <p className="text-center text-xl text-semibold">Album</p>
              <Image
                src={data.album.cover_art_url}
                className="w-[200px] py-3 h-[200px] object-cover"
              />
              <p>{data.album.name}</p>
            </CardHeader>
          )}

          {data.writer_artists.length > 0 && (
            <CardBody className="p-5">
              <p className="text-center text-xl py-3 text-semibold">
                Written Artists
              </p>

              <AvatarGroup isBordered>
                {data.writer_artists.map((p, i) => {
                  return (
                    <Tooltip key={i} content={p.name}>
                      <Avatar src={p.header_image_url} />
                    </Tooltip>
                  );
                })}
              </AvatarGroup>
            </CardBody>
          )}

          {data.media !== undefined > 0 && (
            <CardFooter className="p-5 text-[3rem] justify-evenly">
              <p className="text-center text-xl text-semibold">Watch it on</p>

              {data.media.map((p, i) => {
                return (
                  <Link key={i} href={p.url}>
                    {p.provider === providers[0] && icons[0]}
                    {p.provider === providers[1] && icons[1]}
                    {p.provider === providers[2] && icons[2]}
                  </Link>
                );
              })}
            </CardFooter>
          )}
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PlayPanel;
