import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="course">
      <motion.div
        initial={{ scale: 0.5, opacity: 0.5 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileTap={{ opacity: 1, scale: 2 }}
        drag
        className="box"
      ></motion.div>
    </div>
  );
};

export default Test;
