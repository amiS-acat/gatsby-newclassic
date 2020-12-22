import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/debussy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <>
      <Img className="top-img" fluid={data.file.childImageSharp.fluid} />
      <div className="content-width">
        <section>
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
        </section>
      </div>
    </>
  );
};

export default Index;
