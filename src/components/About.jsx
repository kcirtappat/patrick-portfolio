import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../assets/profilepic.jpg";
import Social from "./Social";

function About() {
  return (
    <div name="about" className="w-full h-max bg-stone-900 text-white">
      {/* SOCIAL ICONS */}
      <Social />

      {/* ABOUT CONTENT */}
      <div className="max-w-[1300px] text-white px-24 py-16 space-y-16 w-full min-h-screen flex flex-col justify-center items-center">
        <motion.div
          className="text-3xl"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: -250, opacity: 0 }}
        >
          <h1 className="font-bold text-emerald-600">About</h1>
        </motion.div>
        <motion.div
          className="max-w-[750px] space-x-4 lg:space-x-8 flex flex-col md:flex-row md:space-x-0 space-y-8 justify-center items-center"
          initial={{ y: 450, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: 450, opacity: 0 }}
        >
          {/* PICTURE */}
          <img src={img} alt="my piktyur" className="rounded-lg" width={250} />
          <p className="leading-8">
            Hello again, My name is Patrick Jocson, I'm graduate student of
            Kodego bootcamp fullstack web development. I love to animate and
            designing things on website, and I do it as a passion
          </p>
        </motion.div>
        <motion.div
          className="max-w-[1000px] space-y-8 flex flex-col text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <h3 className="text-3xl text-emerald-600 font-bold mb-8">
            Certification
          </h3>
          <div className="max-w-[1000px] text-start space-y-16 flex flex-col">
            <p className="">
              Frontend 101 Web Development | Bayan Academy Bootcamp (August -
              September 2022)
            </p>
            <p className="">
              Fullstack Web Development | Kodego Bootcamp (May 2022 - August
              2022)
            </p>
            <p className="">
              Y4iT Research Summit 2019 | UP System Information Technology
              Foundation (March 2019)
            </p>
          </div>
        </motion.div>
      </div>
      {/* PREV BUTTON */}
      <motion.div
        className="fixed top-[50%] left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Link to="/">
          <button className="px-4 py-4 rounded-lg bg-slate-400 bg-transparent hover:ml-[-10%] duration-500">
            <FaAngleDoubleLeft size={30} />
          </button>
        </Link>
      </motion.div>
      {/* NEXT BUTTON */}
      <motion.div
        className="fixed top-[50%] right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Link to="/projects">
          <button className="px-4 py-4 rounded-lg bg-slate-400 bg-transparent hover:ml-[10%] duration-500">
            <FaAngleDoubleRight size={30} />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default About;
