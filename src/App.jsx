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
      <div id="multi-layered-glow">
        <Navbar />
        <Hero />
      </div>
      <HowItWorks />
      <Generator />
      <Footer />
    </>
  );
}

export default App;
