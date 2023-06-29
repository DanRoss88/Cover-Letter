import Image from "next/image";
import Head from "next/head";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";



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
          <div id="whyyou" className="card" />
          <div id="whyme" className="card" />
          <div id="skills" className="card" />
          <div id="references" className="card" />
          <div id="resume" className="card" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
