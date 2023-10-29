import React from "react";
import PjDetails from "./index.js";

function LearnPractice() {
  const title = `Learning & Projects by practicing`;

  const learnPracticeText = `<p>
              I started a journey of learning React, and spending some time practicing coding was a rewarding experience. During this process, I gained valuable knowledge of my web development skills.
            </p><br/>
            <ul class="pj-list">
              <li>Understanding the fundamentals of React</li>
              <li>State management experience</li>
              <li>Reusability of components</li>
              <li>Working with external libraries</li>
              <li>Handling asynchronous operations</li>
              <li>List of projects</li>
            </ul><br/>
            <p>My journey of self-learning and practicing React code has been extremely rewarding. I've deepened my understanding of web development, improved my problem-solving abilities, and built a portfolio that showcases my skills. These achievements give me more confidence as a developer and open up exciting opportunities for my  web development career.</p>`;

  const learnPracticeTech = `<span class="code--white">React</span>
                      <span class="code--white">Redux </span>
                      <span class="code--white">React Hooks </span>
                      <span class="code--white">JavaScript</span>
                      <span class="code--white">SASS</span>`;

  const learnPracticeLink = `<a 
                            href="https://github.com/thinzar-dev"
                            class="original-ui"
                            target="_blank">
                            See More
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
        pjText={learnPracticeText}
        pjTech={learnPracticeTech}
        pjLink={learnPracticeLink}
      ></PjDetails>
    </div>
  );
};

export default LearnPractice;