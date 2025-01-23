import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import ScrollToTopButton from "./components/Scroll/ScrollToTopButton";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
  
      <div id="contact"><Contact /></div>
      <div id="resume"><Resume /></div>
      <div id="home2"><Home2 /></div>
      <Footer />
      <ScrollToTopButton />

    </div>
  );
}

export default App;
