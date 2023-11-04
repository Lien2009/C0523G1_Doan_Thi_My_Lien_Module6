import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container text-center text-white">
        <div className="footer__main">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-google-plus-g" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>
          <div className="footer__copies">
            <p>© 2023 All rights reserved | Designed by ....</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
