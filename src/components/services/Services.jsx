import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import SkillsContainer from "./SkillsContainer";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      // comment out for mobile responsiveness
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Making apps with modern technologies <br />
          Never miss a task, deadline or idea
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
        </div>
      </motion.div>
      <SkillsContainer />
    </motion.div>
  );
};

export default Services;
