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



export default function Home({ title = "Dans Personal Cover Letter" }) {
  return (
    <div className="body-container">
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main className="main-container">
        <div className="main-grid">
        <Header />
          <div id="about" className="main-card">
          
            <About />
          </div>
          <div id="projects" className="main-card">
       
            <Projects />
          </div>
          <div id="whyyou" className="main-card">
          <Company />
          </div> 
          <div id="whyme" className="main-card"> 
          <WhyMe />
          </div>
          <div id="skills" className="main-card">
          <Skills />  
          </div>
          <div id="references" className="main-card">
          <References />
          </div>
        </div>
      </main>
      
      <Footer />
      
      
        <Socials />
     
    </div>
  );
}
