import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./components/landing";
import "./App.css";
// Delay function (5 sec)
const delayImport = (component) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(component()), 5000);
  });
};

// Lazy Components (ALL delayed)
const Home = lazy(() => delayImport(() => import("./components/home")));
const About = lazy(() => delayImport(() => import("./components/about")));
const Contact = lazy(() => delayImport(() => import("./components/contact")));

function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <nav>
        <Link to="/home">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <Suspense fallback={<h2>Loading... Please Wait ⏳</h2>}>
        <Routes>
          {/* 👇 Loads initially */}
          <Route path="/" element={<Landing />} />

          {/* 👇 Loads ONLY when clicked */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;