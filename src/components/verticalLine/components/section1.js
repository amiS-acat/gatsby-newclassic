import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      peacock: file(relativePath: { eq: "images/photo/white peacock.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sunset: file(relativePath: { eq: "images/photo/sunset.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      acquaPaola: file(relativePath: { eq: "images/photo/acquaPaola.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      clouds: file(relativePath: { eq: "images/photo/clouds.jpg" }) {
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
      <div className="img-bg">
        <Img
          className="img-wrapper"
          fluid={data.peacock.childImageSharp.fluid}
        />
      </div>
      <div className="img-bg img-bg--orange">
        <Img
          className="img-wrapper"
          fluid={data.sunset.childImageSharp.fluid}
        />
      </div>
      <div className="img-bg img-bg--blue">
        <Img
          className="img-wrapper"
          fluid={data.acquaPaola.childImageSharp.fluid}
        />
      </div>
      <div className="img-bg img-bg--yellow">
        <Img className="img-wrapper" fluid={data.clouds.childImageSharp.fluid} />
      </div>
    </>
  );
};

export default Section;
