"use strict";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Generator } from "./components/Generator";
import { HowItWorks } from "./components";
import { Footer } from "./components";
function App() {
  return (
    <>
      <div id="">
        <Navbar />
        <Hero />
      </div>
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
