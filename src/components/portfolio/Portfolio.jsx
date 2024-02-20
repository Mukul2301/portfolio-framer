import React, { useRef } from "react";
import "./portfolio.scss";
import Projects from "./Projects";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Wordle App",
    image:
      "https://assetsio.reedpopcdn.com/wordle-past-answers-header.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nostrum excepturi dolores eligendi fugit consequuntur, molestiae ipsam soluta reiciendis, doloremque aliquam commodi nam laborum numquam laudantium vel mollitia qui enim.",
  },
  {
    id: 2,
    title: "KanBan App",
    image:
      "https://assetsio.reedpopcdn.com/wordle-past-answers-header.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nostrum excepturi dolores eligendi fugit consequuntur, molestiae ipsam soluta reiciendis, doloremque aliquam commodi nam laborum numquam laudantium vel mollitia qui enim.",
  },
  {
    id: 3,
    title: "Registration App",
    image:
      "https://assetsio.reedpopcdn.com/wordle-past-answers-header.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nostrum excepturi dolores eligendi fugit consequuntur, molestiae ipsam soluta reiciendis, doloremque aliquam commodi nam laborum numquam laudantium vel mollitia qui enim.",
  },
  {
    id: 4,
    title: "Currency App",
    image:
      "https://assetsio.reedpopcdn.com/wordle-past-answers-header.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nostrum excepturi dolores eligendi fugit consequuntur, molestiae ipsam soluta reiciendis, doloremque aliquam commodi nam laborum numquam laudantium vel mollitia qui enim.",
  },
];
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Projects item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
