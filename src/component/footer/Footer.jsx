import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="paragraph">Code By Pritam </p>
      <ul>
        <li className="lists ">
          <a
            href="https://twitter.com/Pritamkr_"
            target="_blank"
            className="links"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="lists ">
          <a
            href="https://www.linkedin.com/in/pritam-kumar-0ab3431bb/"
            target="_blank"
            className="links"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="lists">
          <a
            href="https://www.instagram.com/pritam_kr30/"
            target="_blank"
            className="links"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="lists ">
          <a
            href="https://github.com/pritam-kr"
            target="_blank "
            className="links "
          >
            <i className="fab fa-github "></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer};
