import React from "react";
import Img from "gatsby-image";

import Menu from "./menu";
import Header from "./header";
import Footer from "./footer";
import Name from "./name";
import Section0 from "./section0";
import Section1 from "./section1";
import Section2 from "./section2";
import Section2_5 from "./section2.5";
import Pictures1 from "./pictures1";
import Pictures2 from "./pictures2";
import { graphql, useStaticQuery } from "gatsby";

const Page = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/photo/myPhoto.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className="top-content">
      <Menu />
      <div style={{ width: "100%", height: "70px" }}></div>
      <div id="t1"></div>
      <Header>
        <div className="content-width">Ami Sawai</div>
      </Header>
      <div style={{ position: "relative", background: "#efefef", zIndex: "0" }}>
        <Img className="myPhoto" fluid={data.file.childImageSharp.fluid} />
        <Name />
        <div id="t2"></div>
        <Header>
          <div className="content-width">Profile</div>
        </Header>
        <Section0 />
      </div>
      <div id="t3"></div>
      <Header>
        <div className="content-width">My Favorite</div>
      </Header>
      <Section1 />
      <div className="content-width">
        <Pictures1 />
      </div>
      <Section2 />
      <Section2_5 />
      <div className="content-width">
        <Pictures2 />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
