import React from "react";
import PjDetails from "./index.js";

function Certification() {

    const title = `FreeCodeCamp Front End Development Libraries`;

    const certifiedText = `<p>
              I started learning to improve my knowledge from different sources
              such as freeCodeCamp.org and sololearn. I achieved Front End
              Development Libraries Certification of freeCodeCamp for my front-end career and
              honed my skills. During this certification, I learned and
              demonstrated my skills in React.js, Redux, Sass, Bootstrap, and jQuery
              for building certification projects.
            </p><br/>
            <p> Here is the list of projects built for certification: </p><br/>
            <ul class="pj-list">
              <li>A Random Quote Machine</li>
              <li>A Markdown Previewer</li>
              <li>A Drum Machine</li>
              <li>A JavaScript Calculator</li>
              <li>A 25 + 5 Clock</li>
            </ul><br/>
            <p>I also accomplished some courses from <a href="https://www.sololearn.com/profile/28149590" target="_blank">sololearn.</a></p>`;

    const certifiedTech = `<span class="code--white">React</span>
                      <span class="code--white">Redux </span>
                      <span class="code--white">React Hooks </span>
                      <span class="code--white">JavaScript</span>
                      <span class="code--white">SASS</span>`;

    const certifiedLink = `<a 
                            href="https://www.freecodecamp.org/certification/Thinzar/front-end-development-libraries"
                            class="original-ui"
                            target="_blank">
                            See Certification
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
                        </a>`;

    return (
        <div>
            <PjDetails
                title={title}
                pjText={certifiedText}
                pjTech={certifiedTech}
                pjLink={certifiedLink}
            ></PjDetails>
        </div>
    );
};

export default Certification;