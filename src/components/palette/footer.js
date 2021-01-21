import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import InnerLink from "../innerLink";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner display-flex">
          <button className="HOME-btn">HOME</button>
          <div>
            List
            <InnerLink />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
