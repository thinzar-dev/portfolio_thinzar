import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../navComponent/Navbar";
import NavCircle from "../navComponent";
import './index.css';
import GoToTop from "../../GoToTop";
import { BottomScrollListener } from "react-bottom-scroll-listener";

function PjDetails({ title, pjText, pjTech, pjLink }) {

  const skillAimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  const [navClass, setNavClass] = useState("nav-circle");

  const handleOnDocumentBottom = () => {
    console.log("I am at bottom! " + Math.round(performance.now()));
    setNavClass("show-nav-circle");
    if (
      1 <
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight
    ) {
      setNavClass("nav-circle");
    }
  };

  return (
    <div className="pj-details">
      <Navbar />
      <div className="pj-fact">
        <motion.h2
          className="header-pj"
          variants={skillAimation}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.4 }}
          exit="exit"
          transition={{ duration: 1.5 }}
        >
          {title}
        </motion.h2>
        <div className="pj-row">
          <motion.div
            className="pj-content-col"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            style={{ color: "#fff" }}
          >
            <div dangerouslySetInnerHTML={{ __html: pjText }}></div>
          </motion.div>
          <motion.div
            className="pj-tech-col"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            <div>
              <div>
                <div className="div-built">
                  <div className="tech-line">
                    <div className="tech-stack">TECH STACK: </div>
                    <div className="tech">
                      <div dangerouslySetInnerHTML={{ __html: pjTech }}></div>
                    </div>
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: pjLink }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="svg-div">
        <div className={navClass}>
          <NavCircle />
        </div>
      </div>
      <BottomScrollListener
        onBottom={handleOnDocumentBottom}
        triggerOnNoScroll={true}
        offset={50}
      />
      <GoToTop />
    </div>
  );
};

export default PjDetails;