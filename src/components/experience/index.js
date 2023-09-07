import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../navComponent/Navbar";
import NavCircle from "../navComponent";
import "./index.css";
import GoToTop from "../../GoToTop";

function Experience() {

  const animations = {
    initial: { x: -100, y: 20, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: -100, y: 20, opacity: 0 },
  };

  const timelineAimation = {
    initial: { y: 80, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 120, opacity: 0 },
  };
  
  const [navClass, setNavClass] = useState("nav-circle");

  const handleScroll = () => {
    if (
      0 <=
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight <=
      1
    ) {
      setNavClass("show-nav-circle");
    }
    if (
      1 <
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight
    ) {
      setNavClass("nav-circle");
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    if ((document.documentElement.scrollHeight === document.documentElement.clientHeight - document.documentElement.scrollTop) &&
      (document.documentElement.clientWidth > 767)
    ) {
      setNavClass("show-nav-circle");
    }
  }, []);

  return (
    <div id="experience-style">
      <Navbar />
      <div className="portfolio-timeline">
        <motion.div
          variants={animations}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.4 }}
          exit="exit"
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.h2
          className="header-timeline"
          variants={timelineAimation}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.4 }}
          exit="exit"
          transition={{ duration: 1 }}
        >
          Experience & Education
        </motion.h2>
        <div className="timeline-data">
          <motion.div
            className="timeline-entry"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1 }}
            exit="exit"
          >
            <div className="timeline-wrapper">
              <div className="timeline-icon color-1">
                <i className="icon-pen2"></i>
              </div>
              <div className="timeline-label">
                <h2>
                  Self study & Projects <span>2022-present</span>
                </h2>
                <p>
                  After joining my previous job for three years, I focused on
                  self-study and projects to improve my skills and knowledge in
                  React. I started to learn the fundamentals of{" "}
                  <span className="code-pkg">React</span>, including components,
                  props, and state management from online sources such as
                  freeCodeCamp, sololearn, etc. I began building a series of
                  increasingly complex projects. Overall, my self-study and
                  project work in React allowed me to gain valuable skills and
                  experience that I can apply to future projects. I achieved the{" "}
                  <span className="skill-tech">
                    FreeCodeCamp Front End Development Libraries
                  </span>
                  , which helped me solidify my understanding of frontend
                  development.
                </p>
                <br></br>
                <p>
                  In addition, here is a list of the projects I practiced during
                  this period:
                </p>
                <ul>
                  <li>Flashcard</li>
                  <li>Weather App</li>
                  <li>Meme Generator</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="timeline-entry"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="timeline-wrapper">
              <div className="timeline-icon color-1"></div>
              <div className="timeline-label">
                <h2>
                  Web Developer @ Digital Laboratory Myanmar{" "}
                  <span>2019-2022</span>
                </h2>
                <p>Website Development, Maintenance</p>
                <ul>
                  <li>
                    Collaborated with web designer and director to identify and
                    prioritize features and requirements of site development
                  </li>
                  <li>
                    Worked with <span className="code-pkg">Figma</span> designs
                    and created browser-friendly using{" "}
                    <span className="code-pkg">WordPress</span> and{" "}
                    <span className="code-pkg">Duda</span> sites
                  </li>
                  <li>
                    Maintained and monitored website performance and improved
                    according to Google Speed Insights
                  </li>
                  <li>
                    Cooperated within <span className="code-pkg">Agile</span>{" "}
                    teams and utilized Scrum methodologies, as well as tools
                    like Atlassian JIRA{" "}
                  </li>
                  <li>
                    Tested and implemented subscription management platforms
                    such as{" "}
                    <span className="code-pkg">
                      Chargebee, Zoho Subscription
                    </span>
                    , and <span className="code-pkg">WooCommerce</span> for our
                    in-house service websites
                  </li>
                  <li>
                    Tested <span className="code-pkg">Zoho CRM</span> automation
                    process for plan subscription and collaborated with website
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="timeline-entry"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="timeline-wrapper">
              <div className="timeline-icon color-1">
                <i className="icon-pen2"></i>
              </div>
              <div className="timeline-label">
                <h2>
                  Web Developer @ Data Link Technology <span>2018-2018</span>
                </h2>
                <p>Internship (Web Development)</p>
                <ul>
                  <li>
                    Collaborated with senior developers to develop and maintain
                    hands-on projects using{" "}
                    <span className="code-pkg">
                      WordPress, HTML, CSS, JavaScript
                    </span>{" "}
                  </li>
                  <li>
                    Conducted code reviews and fixed feedback to improve code
                    quality
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="timeline-entry"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="timeline-wrapper">
              <div className="timeline-icon color-1">
                <i className="icon-pen2"></i>
              </div>
              <div className="timeline-label">
                <h2>
                  Bachelor of Engineering - BE, Computer Engineering &
                  Information Technology <span>2012-2018</span>
                </h2>
                <p>
                  During the university, I acquired knowledge and completed
                  projects. In each academic year, according to learning
                  subjects, we have accomplished group projects by dividing our
                  tasks. I effectively applied the knowledge and skills imparted
                  by the educational institution. Here are the mini-thesis and
                  projects I have done in university life.
                </p>
                <ul>
                  <li>
                    Data Hiding System based on Proposed Text Steganographic
                    Method
                  </li>
                  <li>Bluetooth controlled Robotic Car</li>
                  <li>Connect 6 Game</li>
                  <li>Point Of Sale(POS) for mini store</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="timeline-entry"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="timeline-wrapper">
              <div className="timeline-icon color-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="svg-div">
        <div className={navClass}>
          <NavCircle />
        </div>
      </div>
      <GoToTop />
    </div>
  );
}

export default Experience;