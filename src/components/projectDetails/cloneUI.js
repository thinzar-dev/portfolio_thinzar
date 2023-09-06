import React from "react";
import PjDetails from "./index";

function CloneUI() {

    const title = `Clone website`;

    const clonePgText = `<p>
    To further refine my expertise as a front-end developer, I engage in recreating real websites. The cloning website provides creative design and techniques they use and also offers valuable learning opportunities.
    </p></br>
    <p>During this development, I applied various libraries, including <span class='code-pkg'>react-slick, react-tab, react slick-carousel, and responsive design principles</span>, ensuring seamless compatibility with different screen sizes.</p></br>
    <p>I reconfigured the navigation links connecting to separate pages in the original site as interlinks to relevant sections of the page seamlessly.
I also modified the CSS of the libraries to align its appearance with the layout of the original website with a smooth transition.</p></br>
<p>I am well-versed in the utilization of various libraries and have achieved proficiency in executing actual website design layouts.</p>`;

    const clonePgTech = `<span class="code--white">React</span>
                      <span class="code--white">Redux </span>
                      <span class="code--white">JavaScript </span>`;

    const clonePgLink = `<a href="https://trello.com/" class="original-ui" target="_blank">
                            Origianl UI
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#ffffff"></path></svg></a></br>
                           <a href="https://trello-homepageui-clone.netlify.app/" class="clone-ui" target="_blank">Clone Demo
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#ffffff"></path></svg></a></br>
                           </a>`;

    return (
      <div>
        <PjDetails
          title={title}
          pjText={clonePgText}
          pjTech={clonePgTech}
          pjLink={clonePgLink}
        ></PjDetails>
      </div>
    );
};

export default CloneUI;