import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import scrollTo from "gatsby-plugin-smoothscroll";

import Music from "../../players/The Fountain of the Acqua Paola";

const Section = () => {
  const [play, setPlay] = useState(false);

  const data = useStaticQuery(graphql`
    {
      FV: file(relativePath: { eq: "images/picture/palette--acuq.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      record: file(relativePath: { eq: "images/picture/record--blue.png" }) {
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
      note: file(relativePath: { eq: "images/picture/note--blue.png" }) {
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
            Shimmering lights
            <br />
            <br />
            As through the Aurora's
            <br />
            <br />
            Wild polar fires
            <br />
            <br />
            Flashed in thy happy bubbles, died in thy foam.
          </div>
          <Img className="img--ink" fluid={data.ink.childImageSharp.fluid} />
          <div style={{ position: "relative" }}>
            <Img
              className="note-line"
              fluid={data.note.childImageSharp.fluid}
            />
            <div className="note-ja" style={{ marginTop: "6%" }}>
              煌めく光
              <br />
              <br />
              オーロラを透かしたように
              <br />
              <br />
              野生の極火が
              <br />
              <br />
              あなたの幸せの気泡で閃き、
              <br />
              <br />
              あなたの泡沫の中で死んだ
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => scrollTo("#a01")}
        className="page__bottom"
        style={{ backgroundColor: "#1F848B" }}
      >
        <button className="page__text">
          top <span className="text--arrow">⬆︎</span>
        </button>
      </div>
    </>
  );
};

export default Section;