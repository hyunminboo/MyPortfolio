import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import footer from "../../utils/footer";
import "./styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <div className="left">
          <div className="footer-logo">
            B<span className="dot"></span>M
          </div>
          <p className="copy">{footer.brand.copy}</p>
        </div>
        <div className="right">
          <a href="#" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a href="#" aria-label="Notion">
            <SiNotion size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
