import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navComponent/Navbar";
import NavCircle from "../navComponent";
import "./index.css";
import GoToTop from "../../GoToTop";
import { BottomScrollListener } from "react-bottom-scroll-listener";

function Home() {
  
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
    <div className="container">
      <div className="intro">
        <h2>Welcome</h2>
      </div>
      <main>
        <div className="content">
          <div className="bg-banner">
            <Navbar />
            <div className="banner-intro">
              <h1>Thinzar Oo</h1>
              <h2>Front-end Web Developer</h2>
              <Link to="about-me">
                About Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="svg-div">
              <div className={navClass}>
                <NavCircle />
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomScrollListener
        onBottom={handleOnDocumentBottom}
        triggerOnNoScroll={true}
        offset={50}
      />
      <GoToTop />
    </div>
  );
};

export default Home;