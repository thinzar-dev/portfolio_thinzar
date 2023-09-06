import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navComponent/Navbar";
import NavCircle from "../navComponent";
import "./index.css";

function Home () {
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
            <NavCircle />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;