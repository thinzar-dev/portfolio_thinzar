import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./components/home/index";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Certification from "./components/projectDetails/certification";
import CloneUI from "./components/projectDetails/cloneUI";
import Portfolio from "./components/projectDetails/portfolio";
import LearnPractice from "./components/projectDetails/learnPractice";
import GoToTop from "./GoToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about-me" Component={AboutMe}></Route>
          <Route path="/skills" Component={Skills}></Route>
          <Route path="experiences" Component={Experience}></Route>
          <Route path="projects" Component={Projects}></Route>
          <Route path="/projects/certification" Component={Certification}></Route>
          <Route path="/projects/clone-ui" Component={CloneUI}></Route>
          <Route path="/projects/portfolio" Component={Portfolio}></Route>
          <Route path="/projects/learn-and-practice" Component={LearnPractice}></Route>
        </Routes>
        <GoToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;