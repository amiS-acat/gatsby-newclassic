import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import scrollTo from "gatsby-plugin-smoothscroll";

import Music from "../../../frontmatter/music/Clouds.mp3";

const Section = () => {
  const [play, setPlay] = useState(true);

  const data = useStaticQuery(graphql`
    {
      FV: file(relativePath: { eq: "images/picture/palette--nightfall.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      record: file(
        relativePath: { eq: "images/picture/record--pinkbrown.png" }
      ) {
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
      note: file(relativePath: { eq: "images/picture/note--violet.png" }) {
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
            aria-label="play"
          >
            <audio controls src={Music} />
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
            The long day is over.
            <br />
            <br />
            Dusk, and silence now:
            <br />
            <br />
            And Night, that is as dew
            <br />
            <br />
            On the Flower of the World.
          </div>
          <Img className="img--ink" fluid={data.ink.childImageSharp.fluid} />
          <div style={{ position: "relative" }}>
            <Img
              className="note-line"
              fluid={data.note.childImageSharp.fluid}
            />
            <div className="note-ja" style={{ marginTop: "8%" }}>
              長い一日が終わった。
              <br />
              <br />
              夕暮れ、そして沈黙：
              <br />
              <br />
              そして夜は、世界の花の露のよう
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => scrollTo("#a01")}
        className="page__bottom"
        style={{ backgroundColor: "#534D61" }}
      >
        <button className="page__text" aria-label="control">
          top <span className="text--arrow">⬆︎</span>
        </button>
      </div>
    </>
  );
};

export default Section;
