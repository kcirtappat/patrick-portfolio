import React from "react";
import { MdFacebook } from "react-icons/md";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className="social-links">
      <motion.div
        initial={{ y: -450 }}
        animate={{ y: 70 }}
        transition={{ delay: 0.5 }}
        exit={{ y: -450 }}
        className="text-white fixed hidden md:flex left-[3%]"
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
    </div>
  );
};

export default Social;
