import React from "react";
import "./portfolio.scss";
import wordle from "../../assets/wordle.webp";
import kanban from "../../assets/kanban.jpg";
import form from "../../assets/register.webp";
import currency from "../../assets/currency.jpeg";
import Projects from "./Projects";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Wordle Game",
    url: "https://wordle-mukul.netlify.app/",
    image: wordle,
    desc: "Built a Wordle game using React, HTML, and CSS. Players guess a hidden five-letter word, receiving feedback on correctness. Features input field, submit button, guess history, and reset button. Offers engaging puzzle experience with intuitive interface. Demonstrates proficiency in React development and front-end design.",
  },
  {
    id: 2,
    title: "Kanban Board",
    url: "https://kanban-mukul.netlify.app/",
    image: kanban,
    desc: "Crafted a Kanban board with React and Tailwind CSS, enabling task management via drag-and-drop interface. Users organize tasks into customizable columns, facilitating workflow visualization and collaboration. Demonstrates adeptness in React development and UI design, enhancing productivity and project management capabilities.",
  },
  {
    id: 3,
    title: "Registration Form",
    url: "https://ms-reg-form-redux.netlify.app/",
    image: form,
    desc: "Created a user registration form using Redux for state management coupled with Material-UI components, ensuring a streamlined and intuitive user experience. Leveraged Material-UI's pre-designed components for a polished look and feel, enhancing the form's aesthetic appeal and usability while maintaining Redux's powerful state management capabilities.",
  },
  {
    id: 4,
    title: "Currency Converter",
    url: "https://currency-converter-min.netlify.app/",
    image: currency,
    desc: "Developed a dynamic currency converter application utilizing React for frontend functionality, CSS for styling, and the ExchangeRate API for real-time currency data. Users can effortlessly convert between different currencies, with the application fetching up-to-date exchange rates from the API, providing accurate and reliable conversion results.",
  },
];

const Portfolio = () => {
  const { scrollYProgress } = useScroll({
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
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
