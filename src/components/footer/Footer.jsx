import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrappaer/ContentWrapper";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/youssef.chaabi.9634/"
            target="_blank"
            className="icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/youssef_chaabii/"
            target="_blank"
            className="icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/ChaabiiYousef"
            target="_blank"
            className="icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-chaabi-863510187/"
            target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
