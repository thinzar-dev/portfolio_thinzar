import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navComponent/Navbar';
import NavCircle from '../navComponent';
import freeCodeCamp from '../../images/Freecode_camp_FED.png'
import TrelloHomeClone from "../../images/trello-clone-Ui.png";
import Portfolio from '../../images/portfolio.png';
import Learn from '../../images/LC1.png'
import './index.css';
import GoToTop from '../../GoToTop';
import { BottomScrollListener } from 'react-bottom-scroll-listener';

function Projects() {

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
    <div className="pj-card">
      <Navbar />
      <div className="pj-card-container">
        <ul className="card-grid cs-style-5">
          <li>
            <figure>
              <img src={freeCodeCamp} alt="freeCodeCamp_Certification" />
              <figcaption>
                <h3>FreeCodeCamp Front End Development Libraries</h3>
                <Link to="/projects/certification">Take a look</Link>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={TrelloHomeClone} alt="clone_website_home_UI" />
              <figcaption>
                <h3>Clone website</h3>
                <Link to="/projects/clone-ui">Take a look</Link>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={Portfolio} alt="portfolio_site" />
              <figcaption>
                <h3>Portfolio Website</h3>
                <Link to="/projects/portfolio">Take a look</Link>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={Learn} alt="learn_and_practice_code" />
              <figcaption>
                <h3>Learning & Projects by practicing</h3>
                <Link to="/projects/learn-and-practice">Take a look</Link>
              </figcaption>
            </figure>
          </li>
        </ul>
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
}

export default Projects;