import React from "react";
import PjDetails from "./index";

function Portfolio() {

    const title = `Portfolio Website`;

    const portfolioText = `<p>
                        As a front-end web developer, I embarked on an exciting journey to create my portfolio website, infusing it with smooth animations and ensuring responsiveness across all devices. This project not only showcases my skills but also serves as a testament to my passion for building visually appealing and user-friendly experiences.
                    </p></br>
                    <p>
                        <span class="portfolio-tech">Animation:</span>
                        In crafting my portfolio website, I employed a variety of animations to create an engaging user experience. By leveraging technologies like <span class='code-pkg'>CSS animations</span>, JavaScript-based animation library for <span class='code-pkg'>React(Framer motion)</span>, or CSS animation properties like <span class='code-pkg'>keyframes</span>, I added subtle animations to elements. Upon scrolling, elements may fade in or slide into view elegantly, providing a sense of interactivity and professionalism. Hover effects were also utilized to make buttons and interactive components respond delightfully to user interactions, leaving a lasting impression.
                    </p></br>
                    <p>
                        <span class="portfolio-tech">Responsiveness:</span>
                        Understanding the importance of catering to users on various devices, I significantly emphasize ensuring that my portfolio website is fully responsive. Applying CSS media queries and flexible design techniques appropriately, the content and components were adjusted dynamically, maintaining readability and usability across all resolutions. 
                    </p></br>
                    <p>  
                        Through this project, I aim to demonstrate my skills, passion, and commitment to excellence in front-end web development, leaving a positive and lasting impression on those who visit my portfolio.
                    </p>`;

    const portfolioTech = `<span class="code--white">React</span>
                      <span class="code--white">React Hooks </span>
                      <span class="code--white">JavaScript </span>
                      <span class="code--white">CSS</span>
                      <span class="code--white">Framer Motion</span>`;

    const portfolioLink = `<a 
                            href="/"
                            class="original-ui"
                            >
                            Portfolio Website
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
          pjText={portfolioText}
          pjTech={portfolioTech}
          pjLink={portfolioLink}
        ></PjDetails>
      </div>
    );
};

export default Portfolio;