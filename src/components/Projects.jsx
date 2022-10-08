import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Social from "./Social";

const Projects = () => {
  return (
    <div className="projects w-full h-max bg-stone-900">
      {/* SOCIAL ICONS */}
      <Social />

      <div className="text-white px-24 py-16 min-h-screen lg:h-max md:h-max flex flex-row justify-center items-center">
        <div className="flex-row justify-center items-center space-y-8">
          <motion.div
            className="text-3xl text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <h1 className="font-bold text-emerald-500">Projects</h1>
          </motion.div>

          {/* Project List */}
          <motion.div
            className="group grid lg:grid-cols-3 md:grid-cols-2 gap-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            {/* ITEM 1 */}
            <motion.a
              href={"https://kcirtappat.github.io/Simple-Login-Signup-Form/"}
              target={"_blank"}
              rel="noreferrer"
              className="container border rounded-lg hover:text-emerald-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              <div className="card p-2">
                <div className="m-4 space-y-1">
                  <span className="text-2xl font-bold">Login/Signup Form</span>
                  <hr />
                  <p className=" text-white text-sm">
                    Simple login and signup form
                  </p>
                  <p className=" text-white text-sm">Stack used: HTML / CSS</p>
                </div>
              </div>
            </motion.a>

            {/* ITEM 2 */}
            <motion.a
              href={
                "https://kcirtappat.github.io/PersonalBlog/personalblog/index.html"
              }
              target={"_blank"}
              rel="noreferrer"
              className="container border rounded-lg hover:text-emerald-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              <div className="card p-2">
                <div className="m-4 space-y-1">
                  <span className="text-2xl indent-8 font-bold">
                    Simple Blogsite
                  </span>
                  <hr />
                  <span className="block text-white text-sm">
                    Personal blogsite made of HTML and CSS, Profile Info,
                    hobbies, favorite game, and gallery content
                  </span>
                  <span className="block text-white text-sm">
                    Stack used: HTML, CSS
                  </span>
                </div>
              </div>
            </motion.a>

            {/* ITEM 3 */}
            <motion.a
              href={"https://kcirtappat.github.io/fetchapidata/"}
              target={"_blank"}
              rel="noreferrer"
              className="container border rounded-lg hover:text-emerald-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              <div className="card p-2">
                <div className="m-4 space-y-1">
                  <span className="text-2xl font-bold">Fetch API</span>
                  <hr />
                  <span className="block text-white text-sm">
                    Fetching api data from the URL
                  </span>
                  <span className="block text-white text-sm">
                    Stack used: React
                  </span>
                </div>
              </div>
            </motion.a>

            {/* ITEM 4 */}
            <motion.a
              href={"https://kcirtappat.github.io/Supreme-Clothing/"}
              target={"_blank"}
              rel="noreferrer"
              className="container border rounded-lg hover:text-emerald-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              <div className="card p-2">
                <div className="m-4 space-y-1">
                  <span className="text-2xl font-bold">Mini Project 1</span>
                  <hr />
                  <span className="block text-white text-sm">
                    Supreme Clothing - Online E-commerse shop for men
                  </span>
                  <span className="block text-white text-sm">
                    Stack used: HTML, CSS, Bootstrap
                  </span>
                </div>
              </div>
            </motion.a>

            {/* ITEM 5 */}
            <motion.a
              href={"https://ryandomincel.github.io/IPR-Company/"}
              target={"_blank"}
              rel="noreferrer"
              className="container border rounded-lg hover:text-emerald-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              <div className="card p-2">
                <div className="m-4 space-y-1">
                  <span className="text-2xl font-bold">Mini Project 2</span>
                  <hr />
                  <span className="block text-white text-sm">
                    IPR Company - Make and create websites for clients that will
                    influence and grow to digital market
                  </span>
                </div>
              </div>
            </motion.a>

            {/* ITEM 6 */}
            <motion.a
              href={"https://cypberpunk-client.vercel.app/"}
              target={"_blank"}
              rel="noreferrer"
              className="container border rounded-lg hover:text-emerald-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              <div className="card p-2">
                <div className="m-4 space-y-1">
                  <span className="text-2xl font-bold">Capstone Project</span>
                  <hr />
                  <span className="block text-white text-sm">
                    Cyberpunk Bootcamp - Web-based attendance monitoring system
                  </span>
                  <span className="block text-white text-sm">
                    Stack used: Nodejs, Reactjs, Expressjs, MongoDB
                  </span>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
        {/* Prev Button */}
        <motion.div
          className="fixed top-[50%] left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Link to="/about">
            <button className="px-4 py-4 rounded-lg bg-slate-400 bg-transparent hover:ml-[-10%] duration-500">
              <FaAngleDoubleLeft size={30} />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
