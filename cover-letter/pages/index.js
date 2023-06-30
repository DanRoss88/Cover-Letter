import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Company from "./components/Company";
import WhyMe from "./components/WhyMe";
import Skills from "./components/Skills";
import References from "./components/References";
import Socials from "./components/Socials";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home({ title = "Dans Personal Cover Letter" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div className="body-container">
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main className="main-container">
        <div className="main-grid">
          <Header />
          <div className="about-grid">
            <div id="about" className="main-card1">
              <About />
            </div>
            <div
              id="bobbi"
              className={`bobbi ${isVisible ? "visible" : ""}`}
              ref={ref}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <Image
                  src={"/bobbipic.jpg"}
                  width={400}
                  height={400}
                  alt="bobbipic"
                  className="bobbipic"
                />
              </motion.div>
            </div>
          </div>
          <div id="projects" className="main-card2">
            <Projects />
          </div>
          <div className="why-grid">
            <div id="whyyou" className="main-card3">
              <Company />
            </div>
            <div id="whyme" className="main-card4">
              <WhyMe />
            </div>
          </div>
          <div id="skills" className="main-card5">
            <Skills />
          </div>
          <div id="references" className="main-card6">
            <References />
          </div>
        </div>
      </main>

      <Footer />

      <Socials />
    </div>
  );
}