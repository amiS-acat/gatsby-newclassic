import React, { useState } from "react";
import Img from "gatsby-image";
import scrollTo from "gatsby-plugin-smoothscroll";

import InnerLink from "../../innerLink";
import { graphql, useStaticQuery } from "gatsby";

const Header = () => {
  const [mobileClick, setMobileClick] = useState(false);

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/photo/mirror.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <>
      <header>
        <button onClick={() => setMobileClick((prevState) => !prevState)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="top-img">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="list">
          <div className="list-top">鏡</div>
          <ul className="lists sp-display-none">
            <li>
              <a onClick={() => scrollTo("#a01")}>蛾</a>
            </li>
            <li>
              <a onClick={() => scrollTo("#a02")}>悲しい鳥たち</a>
            </li>
            <li>
              <a onClick={() => scrollTo("#a03")}>海原の小舟</a>
            </li>
            <li>
              <a onClick={() => scrollTo("#a04")}>道化師の朝の歌</a>
            </li>
            <li>
              <a onClick={() => scrollTo("#a05")}>鐘の谷</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="top__text">
        Ravel Maurice
        <br className="pc-display-none" />　『 Miroirs 』
        <div className="text-small">
          モーリス ラヴェル　組曲『鏡』
          <br />
        </div>
        <div className="top__text mirror-text">
          <div className="text-small" style={{ marginBottom: "-15px" }}>
            モーリス ラヴェル　組曲『鏡』
            <br />
          </div>
          Ravel Maurice
          <br className="pc-display-none" />　『 Miroirs 』
        </div>
      </div>
      <div className="text-align-center text-small">
        Press <span className="small-box"></span> to play
      </div>
      <nav
        className={mobileClick ? "mobile-menu-open" : "mobile-menu"}
        onClick={() => setMobileClick((prevState) => !prevState)}
      >
        <InnerLink />
      </nav>
    </>
  );
};

export default Header;
