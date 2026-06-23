import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
