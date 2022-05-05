 
import * as FaIcons from "react-icons/fa"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-md ">Code By Pritam </p>
      <ul>
        <li className="lists ">
          <a
            href="https://twitter.com/Pritamkr_"
            target="_blank"
            className="links"
            rel="noreferrer"
          >
             <FaIcons.FaTwitter />
          </a>
        </li>
        <li className="lists ">
          <a
            href="https://www.linkedin.com/in/pritam-kumar-0ab3431bb/"
            target="_blank"
            className="links"
            rel="noreferrer"
          >
             <FaIcons.FaLinkedin/>
          </a>
        </li>
        <li className="lists">
          <a
            href="https://www.instagram.com/pritam_kr30/"
            target="_blank"
            className="links"
            rel="noreferrer"
          >
             <FaIcons.FaInstagram />
          </a>
        </li>
        <li className="lists ">
          <a
            href="https://github.com/pritam-kr"
            target="_blank "
            className="links "
          >
             <FaIcons.FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer};
