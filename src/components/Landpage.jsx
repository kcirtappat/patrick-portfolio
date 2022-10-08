import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landpage = () => {
  return (
    <div name="landpage" className="w-full md:h-screen bg-stone-900">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        exit={{ y: -500 }}
        className="text-white fixed hidden md:flex left-[3%] top-[40%]"
      >
        <ul className="space-y-4">
          <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 1 }}>
            <a
              href={"https://github.com/kcirtappat"}
              target={"_blank"}
              rel="noreferrer"
              className="hover:text-neutral-500"
            >
              <RiGithubFill size={30} />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 1 }}>
            <a
              href={"https://www.linkedin.com/in/pjocson"}
              target={"_blank"}
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <RiLinkedinBoxFill size={30} />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 1 }}>
            <a
              href={"https://www.facebook.com/ptrck.jcsn"}
              target={"_blank"}
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <MdFacebook size={30} />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 1 }}>
            <a
              href={"https://www.instagram.com/ptr__ckj/"}
              target={"_blank"}
              rel="noreferrer"
              className="hover:text-pink-600"
            >
              <RiInstagramLine size={30} />
            </a>
          </motion.li>
        </ul>
      </motion.div>
      <div className="text-white text-center sm:text-center space-x-8 min-h-screen cursor-default flex flex-col justify-center items-center lg:flex-row lg:space-x-16 sm:flex-col">
        <div className="space-y-8">
          <motion.p
            className="text-3xl text-emerald-500 lg:text-4xl md:text-3xl sm:text-2xl xs:text-1xl font-semibold"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ x: -150, opacity: 0 }}
          >
            Hello, I am
          </motion.p>
          <motion.p
            className="text-5xl lg:text-9xl md:text-8xl sm:text-5xl xs:text-4xl font-DScript font-bold"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ x: -150, opacity: 0 }}
          >
            Patrick Jocson
            {/* <FaderName /> */}
          </motion.p>
          <motion.p
            className="text-3xl text-emerald-500 lg:text-4xl md:text-3xl sm:text-2xl xs:text-1xl font-semibold"
            // initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ x: -150, opacity: 0 }}
          >
            {" "}
            Aspiring Frontend / Fullstack Web Developer
          </motion.p>
        </div>
        {/* Next Button */}
        <motion.div
          className="fixed right-0 top-[50%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link to="/about">
            <button className="px-4 py-4 rounded-lg bg-slate-400 bg-transparent hover:ml-[10%] duration-500">
              <FaAngleDoubleRight size={30} />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Landpage;
