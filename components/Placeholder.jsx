import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { motion } from "framer-motion";

const Placeholder = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 5000);
  }, []);
  return (
    <div className="flex relative items-center gap-10 flex-col">
      <motion.div
        animate={{
          y: -50,
        }}
        transition={{ delay: 5, duration: 1 }}
      >
        <BeatLoader className="relative top-[80px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: 30,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 5 }}
      >
        <p className="text-[1.3rem]   font-bold text-gray-400">
          Hmmm ... Looks like you're not connected.
        </p>
      </motion.div>
    </div>
  );
};

export default Placeholder;
