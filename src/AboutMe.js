import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navComponent/Navbar";
import NavCircle from "./components/navComponent";
import pfphoto from "./images/thinzar_pf.jpg";
import resume from "./Resume_thinzaroo.pdf";
import GoToTop from "./GoToTop";

function AboutMe() {

  const animations = {
    initial: { x: -100, y: 80, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
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
    <div className="intro-whole">
      <div className="row portfolio-intro">
        <Navbar />
        <div className="intro-section">
          <div className="intro-content">
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { type: "tween", duration: 1.5 },
              }}
              transition={{ type: "spring" }}
            >
              Hi ! <br></br>
              I'm Thinzar Oo <br></br>
              <br></br>
            </motion.h1>
            <motion.div
              initial={{ x: -400, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 1.5 }}
              className="intro-about"
            >
              <p>
                I am a qualified front-end web developer with three years of
                experience specializing in building responsive websites.
                Throughout my career, I have honed my HTML, CSS, and JavaScript
                skills to create websites and also improved site performance as
                needed. I am familiar with subscription management platforms
                such as Chargebee, Zoho Subscription, and WooCommerce for
                in-house service websites, and implemented the Zoho CRM
                automation process for subscriptions. I thrive in collaborative
                team environments by effectively communicating, contributing
                ideas, and working with designers, and other stakeholders to
                achieve project goals.{" "}
              </p>
            </motion.div>
            <motion.div
              className="div-resume"
              variants={animations}
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.4 }}
              transition={{ duration: 1.7 }}
            >
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="download-resume"
              >
                View Resume
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
              </a>
            </motion.div>
          </div>
          <div className="intro-image">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 1 }}
              src={pfphoto}
              alt="Thinzar_Oo_profile_photo"
            ></motion.img>
          </div>
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

export default AboutMe;