import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

import Doctor from "../../../frontmatter/music/Doctor.mp3";
import Moonlight from "../../../frontmatter/music/moonlight.mp3";
import LaFiile from "../../../frontmatter/music/La fille.mp3";
import Arabesque from "../../../frontmatter/music/Arabesque No. 1.mp3";
import Golliwog from "../../../frontmatter/music/Golliwog.mp3";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      green: file(relativePath: { eq: "images/picture/green.png" }) {
        childImageSharp {
          fluid(maxWidth: 156, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      moonlight: file(relativePath: { eq: "images/picture/moonlight.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 156, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      lafiile: file(relativePath: { eq: "images/picture/lafiile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 156, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      pink: file(relativePath: { eq: "images/picture/pink.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 156, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      walk: file(relativePath: { eq: "images/picture/walk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 156, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <>
      <h1 className="title">
        <FontAwesomeIcon icon={faHandPointRight} className="handPoint" />
        click <span className="sp-display-none">for each button </span>to play
        music
      </h1>
      <section className="display-flex-inline-block text-align-center">
        <button className="mini-sircle" aria-label="music">
          <audio controls src={Doctor}>
            <track kind="captions" />
          </audio>
          <Img className="sircle" fluid={data.green.childImageSharp.fluid} />
        </button>
        <button className="mini-sircle" aria-label="music">
          <audio controls src={Moonlight}>
            <track kind="captions" />
          </audio>
          <Img
            className="sircle"
            fluid={data.moonlight.childImageSharp.fluid}
          />
        </button>
        <button className="mini-sircle" aria-label="music">
          <audio controls src={LaFiile}>
            <track kind="captions" />
          </audio>
          <Img className="sircle" fluid={data.lafiile.childImageSharp.fluid} />
        </button>
        <button className="mini-sircle" aria-label="music">
          <audio controls src={Arabesque}>
            <track kind="captions" />
          </audio>
          <Img className="sircle" fluid={data.pink.childImageSharp.fluid} />
        </button>
        <button className="mini-sircle" aria-label="music">
          <audio controls src={Golliwog}>
            <track kind="captions" />
          </audio>
          <Img className="sircle" fluid={data.walk.childImageSharp.fluid} />
        </button>
      </section>
    </>
  );
};

export default Section;
