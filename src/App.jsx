"use strict";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components";
import { Footer } from "./components";
import { CTAs } from "./components/Ctas";
function App() {
  return (
    <>
      <div id="">
        <Navbar />
        <Hero />
      </div>
      <CTAs />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
