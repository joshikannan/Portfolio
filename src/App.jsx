import React from "react";
import "../App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";
import "./index";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <AllProjects />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;
