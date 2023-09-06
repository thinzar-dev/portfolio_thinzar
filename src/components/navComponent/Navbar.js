import React, { useState } from "react";
import { Link } from "react-router-dom";
import thinzarLogo from "../../images/tzar_logo.png"

function Navbar() {

  const [isShown, setIsShown] = useState("contact-hide");
  const [copiedText, setCopiedText] = useState("Copy my email address");

  const copyText = async () => {
    await navigator.clipboard.writeText("thinzar.dev@gmail.com");
    setCopiedText("Copied Successfully!");
  };

  return (
    <div className="portfolio-nav">
      <div className="about-me">
        <Link to="/">
          <img src={thinzarLogo} alt="logo_thinzar_oo"/>
        </Link>
      </div>
      <div
        className="contact-me"
        onMouseEnter={() => setIsShown("contact-show")}
        onMouseLeave={() => (
          setIsShown("contact-hide"),
          setTimeout(() => {
            setCopiedText("Copy my email address");
          }, 700)
        )}
      >
        <h1>Contact Me</h1>
        <div className={isShown}>
          <div className="contact-info">
            <button onClick={copyText}>{copiedText}</button>
            <span>or</span>
            <a href="mailto:thinzar.dev@gmail.com">
              Open your email default app{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;