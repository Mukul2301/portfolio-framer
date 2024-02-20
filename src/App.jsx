import "./App.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/cursor/Cursor";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
