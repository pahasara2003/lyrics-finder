import React from "react";
import PlaceHolder from "./../components/Placeholder";
import { Card, CardHeader, CardBody, Avatar, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const ResultPanel = ({ data, setPath }) => {
  return (
    <div className="flex min-h-[400px] cursor-pointer flex-wrap justify-center items-center">
      {data !== undefined ? (
        data.map((d, i) => {
          return (
            <motion.div
              key={Math.random().toString(16)}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 0.1, delay: i * 0.1 }}
            >
              <div
                onClick={() => {
                  setPath({
                    path: d.result.path,
                    name: d.result.title,
                    data: d.result,
                  });
                }}
              >
                <Card className="w-[240px]  m-3 rounded-sm h-[350px]">
                  <CardHeader className="px-5 flex flex-wrap pt-4 pb-2">
                    <Avatar
                      isBordered
                      src={d.result.primary_artist.image_url}
                    />
                    <div className="w-[80%]">
                      <p className=" px-2 h-[20px] text-sm truncate ">
                        {d.result.primary_artist.name}
                      </p>
                      <p className="px-2 font-bold text-slate-500 text-sm">
                        {" "}
                        Artist
                      </p>
                    </div>
                  </CardHeader>
                  <CardHeader className="flex justify-center m-0">
                    <Image
                      className="w-[200px] h-[200px] rounded-sm object-cover"
                      src={d.result.header_image_thumbnail_url}
                    />
                  </CardHeader>
                  <CardBody className="p-0">
                    <p className="text-center font-bold text-md">
                      {d.result.title}
                    </p>
                  </CardBody>
                </Card>
              </div>{" "}
            </motion.div>
          );
        })
      ) : (
        <PlaceHolder />
      )}
    </div>
  );
};

export default ResultPanel;
