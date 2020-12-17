import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";

const Main = () => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      playBtn: file(relativePath: { eq: "play-btn.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      play1: file(relativePath: { eq: "play1.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      greenBtn: file(relativePath: { eq: "play-green.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO />
      <Layout>
        <div
          className="main_backgroundImg"
          style={{
            backgroundImage: `url(${require("./bgImages/debussy.png")})`,
          }}
        >
          <div
            className={click ? "header_under" : "display-none"}
            style={{
              backgroundImage: `url(${require("./headerImages/green.gif")})`,
            }}
          ></div>
          <div className="main_container">
            <button
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              onClick={() => setClick((prevState) => !prevState)}
            >
              <Img
                className={click ? "spin-btn green-btn" : "spin-btn"}
                fixed={data.greenBtn.childImageSharp.fixed}
              />
              <Img
                className={hover ? "spin-btn spin-btn-hover" : "spin-btn"}
                fixed={data.playBtn.childImageSharp.fixed}
              />
              <Img
                className={
                  hover ? "spin-btn spine-btn-hover-opacity" : "spin-btn"
                }
                fixed={data.play1.childImageSharp.fixed}
              />
            </button>
          </div>
        </div>
        <div className={click ? "container" : "display-none"}>
          <div className="ballone">
            <div className="" style={{ margin: "20px" }}>
              Debussy
              <br />
              Doctor Gradus ad Parnassum
            </div>
            <button className="next">next →</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Main;
