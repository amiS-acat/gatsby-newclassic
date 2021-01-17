import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/photo/debussy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <section>
      <div className="top-img-wrapper">
        <Img className="top-img" fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className="content-width">
        <div className="display-flex-block">
          <div className="big-sircle">
            <div className="sircle-text">Claude Achille Debussy</div>
          </div>
          <div className="cube-container">
            <div className="cube"></div>
          </div>
          <div className="big-sircle">
            <div className="sircle-text">クロード・アシル・ドビュッシー</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
