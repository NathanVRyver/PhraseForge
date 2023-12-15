"use strict";
import { useState } from "react";
import { run } from "./Gemini";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Generator } from "./components/Generator";
import { HowItWorks } from "./components";
function App() {
  return (
    <>
      <div id="multi-layered-glow">
        <Navbar />
        <Hero />
      </div>
      <HowItWorks />
      <Generator />
    </>
  );
}

export default App;
