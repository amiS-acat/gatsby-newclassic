import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      butterfly: file(relativePath: { eq: "images/butterfly.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      clown: file(relativePath: { eq: "images/clown.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className="content-width">
      <div className="BlackBox">
        <Img fixed={data.butterfly.childImageSharp.fixed} />
      </div>
      <div className="BlackBox">
        <FontAwesomeIcon icon={faCrow} />
      </div>
      <div className="BlackBox">
        <Img fixed={data.clown.childImageSharp.fixed} />
      </div>
    </div>
  );
};

export default Index;
