import React from "react";
import { motion } from "framer-motion";
import scroll from "/scroll.png";
import hero from "/hero.png";
import "./hero.scss";

const textVariance = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-1000%",
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariance}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariance}>I'm Mukul Shende</motion.h2>
          <motion.h1 variants={textVariance}>Full Stack Developer</motion.h1>
          <motion.div className="buttons" variants={textVariance}>
            <motion.a
              href="#Portfolio"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button variants={textVariance}>
                See the Latest Work
              </motion.button>
            </motion.a>
            <motion.a
              href="#Contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button variants={textVariance}>Contact Me</motion.button>
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariance}
            animate="scrollButton"
            src={scroll}
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Backend FullStack Frontend Backend FullStack
      </motion.div>
      <div className="imageContainer">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
