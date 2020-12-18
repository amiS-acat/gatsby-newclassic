import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const Page1 = () => {
  const page = 1;
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      playBtn: file(relativePath: { eq: "play-btn.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      numberBtn: file(relativePath: { eq: "play1.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      {/* <figure>
        <audio controls>
          <source
            src="./music/DoctorGradusadParnassum.mp3"
            type="audio/mpeg"
          />
        </audio>
      </figure> */}
      <div
        className="main_bg"
        style={{
          backgroundImage: `url(${require("./bgImages/debussy.png")})`,
        }}
      >
        <div
          className={click ? "header-under" : ""}
          style={{
            backgroundImage: `url(${require("./headerImages/green.gif")})`,
          }}
        ></div>
        <div className="main_bg-container">
          <button
            id="btn-play"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={() => setClick((prevState) => !prevState)}
          >
            <Img
              style={{
                backgroundImage: `url(${require("./headerImages/green.gif")})`,
                borderRadius: "50%",
              }}
              className={hover ? "spin-btn spin-btn-hover" : "spin-btn"}
              fixed={data.playBtn.childImageSharp.fixed}
            />
            <Img
              className={hover ? "spin-btn spine-btn-hover-none" : "spin-btn"}
              fixed={data.numberBtn.childImageSharp.fixed}
            />
          </button>
        </div>
      </div>
      <div className="main_text-container">
        <div className={click ? "main_text" : "main_text-none"}>
          Debussy
          <br />
          Doctor Gradus ad Parnassum
        </div>
        <div className="pageNation-container">
          {/* <Link  className="prev" to={`/page${page - 1}`}>← prev</Link> */}
          <Link className="next" to={`/page${page + 1}`}>
            next →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page1;
