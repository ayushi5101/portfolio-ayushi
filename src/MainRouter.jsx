import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Education from "./components/education/Education.jsx";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/projects/Projects.jsx";
import Services from "./components/services/Services.jsx";
import Experience from "./components/Experience/Experience.jsx";
const MainRouter = () => {
  return (
    <>
      <div>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRouter;
