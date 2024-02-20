import React from "react";
import { motion } from "framer-motion";
import insta from "/instagram.png";
import github from "/github.png";
import linkedIn from "/linkedIn.png";
import twitter from "/twitter.png";
import "./Navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hello!
        </motion.span>
        <motion.div
          className="socials"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/mukul-shende/" target="_blank">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a href="https://github.com/Mukul2301" target="_blank">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.instagram.com/mukul_shende/" target="_blank">
            <img src={insta} alt="insta" />
          </a>

          <a href="https://twitter.com/MukulShende3" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
