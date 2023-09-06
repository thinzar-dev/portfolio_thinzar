import React from "react";
import PjDetails from "./index.js";

function LearnPractice() {
  const title = `Learning & Projects by practicing`;

  const learnPracticeText = `<p>
              I started a journey of learning React, and spending some time practicing coding was a rewarding experience. During this process, I gained valuable knowledge of my web development skills.
            </p><br/>
            <ul class="pj-list">
              <li>Understanding the fundamentals of React: Through self-study, I have developed core React concepts, including components, props, state management, and virtual DOM. This basic knowledge has provided me with a solid foundation to build on. </li>
              <li>State management experience: I explored state management solutions like Redux and the React Context API, learning to manage and share states efficiently in complex applications.</li>
              <li>Reusability of components: Reuse components is a strength of React. I have become adept at creating reusable components, which saves time and promotes a consistent user interface across projects.</li>
              <li>Working with external libraries: I have gained experience in integrating third-party libraries and packages into React applications, extending the functionality of my projects and saving development time.</li>
              <li>Handling asynchronous operations: I have also learned to handle asynchronous operations, such as API requests of tools like Axios.</li>
              <li>List of projects: In my self-study journey, I have tried on React projects. This portfolio showcases my skills and can be a valuable asset when seeking job opportunities or freelance work.</li>
            </ul><br/>
            <p>In short, my journey of self-learning and practicing React code has been extremely rewarding. I've deepened my understanding of web development, improved my problem-solving abilities, and built a portfolio that showcases my skills. These achievements give me more confidence as a developer and open up exciting opportunities for my  web development career.</p>`;

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