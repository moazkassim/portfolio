import "./App.css";
// import "/stars.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <main className="flex w-full flex-col items-center">
      {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
        <Routes>
          <Route exact path="/contactUs" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
