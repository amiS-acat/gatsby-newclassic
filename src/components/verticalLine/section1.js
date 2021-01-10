import React, { useState } from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import White from "../../players/White Peacock";
import Night from "../../players/Nightfall";
import Acqua from "../../players/The Fountain of the Acqua Paola";
import Clouds from "../../players/Clouds";

const Section = () => {
  const [slides, setSlides] = useState(0);

  const data = useStaticQuery(graphql`
    {
      peacock: file(relativePath: { eq: "images/photo/white peacock.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sunset: file(relativePath: { eq: "images/photo/sunset1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      water: file(relativePath: { eq: "images/photo/water.jpg" }) {
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
      play: file(relativePath: { eq: "images/icon/play-btn.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <div
        className="display-flex"
        style={{ margin: "200px 0", position: "relative" }}
      >
        <div className="img-container">
          <div
            onClick={() =>
              slides === 3 ? setSlides(0) : setSlides(slides + 1)
            }
            onKeyDown={() =>
              slides === 3 ? setSlides(0) : setSlides(slides + 1)
            }
            className={
              slides === 0
                ? "img-active"
                : slides === 1
                ? "img-prev"
                : slides === 3
                ? "img-next"
                : "img-none"
            }
          >
            <div className="img-wrapper" style={{ background: "pink" }}>
              <div className="tag">
                <p className="tag-text">The White Peacock</p>
              </div>
              <Img fluid={data.peacock.childImageSharp.fluid} />
            </div>
          </div>
          <div
            onClick={() =>
              slides === 3 ? setSlides(0) : setSlides(slides + 1)
            }
            onKeyDown={() =>
              slides === 3 ? setSlides(0) : setSlides(slides + 1)
            }
            className={
              slides === 1
                ? "img-active"
                : slides === 2
                ? "img-prev"
                : slides === 0
                ? "img-next"
                : "img-none"
            }
          >
            <div
              className="img-wrapper"
              style={{ background: "rgb(118 63 167)" }}
            >
              <div className="tag">
                <p className="tag-text">Nightfall</p>
              </div>
              <Img fluid={data.sunset.childImageSharp.fluid} />
            </div>
          </div>
          <div
            onClick={() =>
              slides === 3 ? setSlides(0) : setSlides(slides + 1)
            }
            onKeyDown={() =>
              slides === 3 ? setSlides(0) : setSlides(slides + 1)
            }
            className={
              slides === 2
                ? "img-active"
                : slides === 3
                ? "img-prev"
                : slides === 1
                ? "img-next"
                : "img-none"
            }
          >
            <div className="img-wrapper" style={{ background: "#a5d9da" }}>
              <div className="tag">
                <p className="tag-text tag-text--2">
                  The Fountain of the <br />
                  Acqua Paola
                </p>
              </div>
              <Img fluid={data.water.childImageSharp.fluid} />
            </div>
          </div>
          <div
            onClick={() =>
              slides === 3 ? setSlides(0) : setSlides(slides + 1)
            }
            onKeyDown={() =>
              slides === 3 ? setSlides(0) : setSlides(slides + 1)
            }
            className={
              slides === 3
                ? "img-active"
                : slides === 0
                ? "img-prev"
                : slides === 2
                ? "img-next"
                : "img-none"
            }
          >
            <div className="img-wrapper" style={{ background: "#ffe4c0" }}>
              <div className="tag">
                <p className="tag-text">Clouds</p>
              </div>
              <Img fluid={data.clouds.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="note-container">
          <div
            className={slides === 0 ? "note note-active" : " note note-none"}
          >
            The White Peacock
            <br />
            Pale, pale as the breath of blue smoke in far woodlands.
            <br />
            Here, as the breath, as the soul of this beauty,
            <br />
            White as a cloud through the heats of the noontide
            <br />
            Moves the White Peacock.
            <br />
          </div>
          <div
            className={slides === 1 ? "note note-active" : " note note-none"}
          >
            The long day is over.
            <br />
            Dusk, and silence now:
            <br />
            And Night, that is as dew
            <br />
            On the Flower of the World.
          </div>
          <div
            className={slides === 2 ? "note note-active" : " note note-none"}
          >
            Shimmering lights
            <br />
            As through the Aurora's
            <br />
            Wild polar fires
            <br />
            Flashed in thy happy bubbles, died in thy foam.
          </div>
          <div
            className={slides === 3 ? "note note-active" : " note note-none"}
          >
            Mountainous glories,
            <br />
            They move superbly;
            <br />
            Crumbling so slowly,
            <br />
            That none perceives when
            <br />
            The golden domes
            <br />
            Are sunk in the valleys
            <br />
            Of fathomless snow.
          </div>
        </div>
        <button className="play-container">
          {slides === 0 ? (
            <White />
          ) : slides === 1 ? (
            <Night />
          ) : slides === 2 ? (
            <Acqua />
          ) : (
            <Clouds />
          )}
          <div className="display-flex">
            play
            <Img fixed={data.play.childImageSharp.fixed} />
          </div>
        </button>
      </div>
    </>
  );
};

export default Section;
