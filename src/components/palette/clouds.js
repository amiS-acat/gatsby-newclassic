import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import scrollTo from "gatsby-plugin-smoothscroll";

import Music from "../../players/Clouds";

const Section = () => {
  const [play, setPlay] = useState(false);

  const data = useStaticQuery(graphql`
    {
      FV: file(relativePath: { eq: "images/picture/palette--clouds.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      record: file(relativePath: { eq: "images/picture/record--purple.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      stylus: file(relativePath: { eq: "images/picture/stylus.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      ink: file(relativePath: { eq: "images/picture/ink.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      note: file(relativePath: { eq: "images/picture/note--green.png" }) {
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
      <div className="content-width">
        <Img className="palette" fluid={data.FV.childImageSharp.fluid} />
        <div className="record-container">
          <button
            aria-hidden="true"
            onClick={() => setPlay((prevState) => !prevState)}
            className="record-button"
          >
            <Music />
            <Img fluid={data.record.childImageSharp.fluid} />
            <Img
              className={play ? "stylus" : "stylus stylus--stop"}
              fluid={data.stylus.childImageSharp.fluid}
            />
            <div className={play ? "needle" : "needle needle--stop"}></div>
          </button>
        </div>
        <div className="note">
          <div className="note-en">
            Mountainous glories,
            <br />
            <br />
            They move superbly;
            <br />
            <br />
            Crumbling so slowly,
            <br />
            <br />
            That none perceives when
            <br />
            <br />
            The golden domes
            <br />
            <br />
            Are sunk in the valleys
            <br />
            <br />
            Of fathomless snow.
          </div>
          <Img className="img--ink" fluid={data.ink.childImageSharp.fluid} />
          <div style={{ position: "relative" }}>
            <Img
              className="note-line"
              fluid={data.note.childImageSharp.fluid}
            />
            <div className="note-ja" style={{ marginTop: "4%" }}>
              山の栄光は、見事に動き；
              <br />
              <br />
              とてもゆっくり崩れていく、
              <br />
              <br />
              誰も気づかないうちに
              <br />
              <br />
              黄金のドームが
              <br />
              <br />
              限りない雪の谷間に沈んでいく
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => scrollTo("#a01")}
        className="page__bottom"
        style={{ backgroundColor: "#5E6C85" }}
      >
        <button aria-hidden="true" className="page__text">
          top <span className="text--arrow">⬆︎</span>
        </button>
      </div>
    </>
  );
};

export default Section;
