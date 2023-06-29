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



export default function Home({ title = "Dans Personal Cover Letter" }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main>
        <Header />
        <div className="grid">
          <div id="about" className="card">
          
            <About />
          </div>
          <div id="projects" className="card">
       
            <Projects />
          </div>
          <div id="whyyou" className="card">
          <Company />
          </div> 
          <div id="whyme" className="card"> 
          <WhyMe />
          </div>
          <div id="skills" className="card">
          <Skills />  
          </div>
          <div id="references" className="card">
          <References />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
