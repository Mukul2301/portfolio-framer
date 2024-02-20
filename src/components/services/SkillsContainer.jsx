import React from "react";
import { motion } from "framer-motion";
import SkillDataProvider from "./SkillDataProvider";
import {
  Frontend_skills,
  Full_stack,
  Backend_skill,
} from "../../utils/skillData";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";

const SkillsContainer = () => {
  return (
    <>
      <motion.h2 variants={slideInFromRight(5)}>Technical Skills</motion.h2>
      <div className="skillsContainer">
        <motion.h3 variants={slideInFromLeft(5)}>Front-End Skills</motion.h3>
        <div className="frontContainer">
          {Frontend_skills.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <motion.h3 variants={slideInFromRight(5)}>Back-End Skills</motion.h3>
        <div className="backContainer">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <motion.h3 variants={slideInFromLeft(5)}>Other Skills</motion.h3>
        <div className="otherContainer">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsContainer;
