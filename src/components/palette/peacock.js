import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import scrollTo from "gatsby-plugin-smoothscroll";

import Music from "../../../frontmatter/music/White Peacock.mp3";

const Section = () => {
  const [play, setPlay] = useState(true);

  const data = useStaticQuery(graphql`
    {
      FV: file(relativePath: { eq: "images/picture/palette--peacock.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      record: file(relativePath: { eq: "images/picture/record--pink.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      stylus: file(relativePath: { eq: "images/picture/stylus.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      ink: file(relativePath: { eq: "images/picture/ink.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      note: file(relativePath: { eq: "images/picture/note--yellow.png" }) {
        childImageSharp {
          fluid(quality: 100) {
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
        <p className="play-text">Click to play !</p>
        <div className="record-container">
          <button
            onClick={() => setPlay((prevState) => !prevState)}
            className="record-button"
            aria-label="play"
          >
            <audio controls src={Music}>
              <track kind="captions" />
            </audio>
            <Img fluid={data.record.childImageSharp.fluid} />
            <Img
              className={play ? "stylus" : "stylus stylus--stop"}
              fluid={data.stylus.childImageSharp.fluid}
            />
            <div className={play ? "needle" : "needle needle--stop"}></div>
          </button>
        </div>
        <div className="note-top">poem by William Sharp</div>
        <div className="note">
          <div className="note-en">
            Pale, pale as the breath of blue smoke in far woodlands.
            <br />
            <br />
            Here, as the breath, as the soul of this beauty,
            <br />
            <br />
            White as a cloud through the heats of the noontide
            <br />
            <br />
            Moves the White Peacock.
          </div>
          <Img className="img--ink" fluid={data.ink.childImageSharp.fluid} />
          <div className="note-ja">
            淡い、遠い森の中の青い煙の息吹のように、淡い。
            <br />
            <br />
            ここに、息吹のように、この美の魂のように、
            <br />
            <br />
            正午の熱気の中の雲のように白く、
            <br />
            <br />
            白孔雀は動く
            <Img
              className="note-line"
              fluid={data.note.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <button
        aria-label="control"
        onClick={() => scrollTo("#a01")}
        className="page__bottom"
        style={{ backgroundColor: "#cfd4c8" }}
      >
        <div className="page__text">
          top <span className="text--arrow">⬆︎</span>
        </div>
      </button>
    </>
  );
};

export default Section;
