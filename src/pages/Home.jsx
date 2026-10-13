import React from "react";
import Hero from "../components/home/Hero";
import Aboutme from "../components/home/Aboutme";
import Header from "../components/home/Header";
import MiniWork from "../components/home/MiniWork";
import Work from "../components/home/Work";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import FixedTop from "../components/home/FixedTop";
import Aboutintro from "../components/home/Aboutintro";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="Hero">
          <Hero />
        </section>
        <section id="AboutIntro">
          <Aboutintro />
        </section>
        <section id="Aboutme">
          <Aboutme />
        </section>
        <section id="MiniWork" className="miniwork-section">
          <MiniWork />
        </section>
        <section id="Work" className="work-section">
          <Work />
        </section>
        <section id="Contact" className="contact-section">
          <Contact />
        </section>
        <FixedTop />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
