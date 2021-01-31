import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

import Doctor from "../../players/Doctor";
import Moonlight from "../../players/Moonlight";
import LaFiile from "../../players/LaFille";
import Arabesque from "../../players/Arabesque";
import Golliwog from "../../players/Golliwog";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      green: file(relativePath: { eq: "images/picture/green.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      moonlight: file(relativePath: { eq: "images/picture/moonlight.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      lafiile: file(relativePath: { eq: "images/picture/lafiile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      pink: file(relativePath: { eq: "images/picture/pink.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      walk: file(relativePath: { eq: "images/picture/walk.jpg" }) {
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
      <div className="title">
        <FontAwesomeIcon icon={faHandPointRight} className="handPoint" />
        click <span className="sp-display-none">for each button </span>to play
        music
      </div>
      <section className="display-flex-inline-block text-align-center">
        <button className="mini-sircle" aria-label="music">
          <Doctor />
          <Img className="sircle" fluid={data.green.childImageSharp.fluid} />
        </button>
        <button className="mini-sircle" aria-label="music">
          <Moonlight />
          <Img
            className="sircle"
            fluid={data.moonlight.childImageSharp.fluid}
          />
        </button>
        <button className="mini-sircle" aria-label="music">
          <LaFiile />
          <Img className="sircle" fluid={data.lafiile.childImageSharp.fluid} />
        </button>
        <button className="mini-sircle" aria-label="music">
          <Arabesque />
          <Img className="sircle" fluid={data.pink.childImageSharp.fluid} />
        </button>
        <button className="mini-sircle" aria-label="music">
          <Golliwog />
          <Img className="sircle" fluid={data.walk.childImageSharp.fluid} />
        </button>
      </section>
    </>
  );
};

export default Section;
