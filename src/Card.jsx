import React, { useState } from "react";
import House from "./assets/House.png";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { MdTitle } from "react-icons/md";
function Card({ title, imgSrc, techStack, live, github }) {
  const [state, setState] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <div className="h-48 w-72 bg-[#7b92f752] rounded-lg flex flex-col items-center">
        <h1 className="font-semibold text-white">{title}</h1>
        <div className="px-2">
          <img
            src={imgSrc}
            alt="project-image"
            className="text-center rounded-lg"
            width={220}
            height={100}
          />
        </div>
        <div className="flex flex-row">
          <p className="text-black text-sm pt-2">{techStack}</p>
          <a href={live} className="pt-2 pl-2" target="_blank">
            <motion.div whileTap={{ scale: 0.5 }}>
              <BsBoxArrowUpRight />
            </motion.div>
          </a>
          <a href={github} className="pt-2 pl-2" target="_blank">
            <motion.div whileTap={{ scale: 0.5 }}>
              <BsGithub
                className="text-textBase text-3xl cursor-pointer"
                style={{ fontSize: "20px" }}
              />
            </motion.div>
          </a>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Card;
