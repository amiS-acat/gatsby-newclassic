import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const page = 1;

  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(true);
  const [click3, setClick3] = useState(true);
  const [click4, setClick4] = useState(true);
  const [click5, setClick5] = useState(true);

  const data = useStaticQuery(graphql`
    {
      green_toll: file(relativePath: { eq: "images/picture/green.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      moonlight_toll: file(
        relativePath: { eq: "images/picture/moonlight.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      lafiile_toll: file(relativePath: { eq: "images/picture/lafiile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      pink_toll: file(relativePath: { eq: "images/picture/pink.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      walk_toll: file(relativePath: { eq: "images/picture/walk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <section style={{ margin: "2% 0" }}>
        <div className="display-flex-block">
          <div
            className="label"
            onClick={() => setClick1((prevState) => !prevState)}
            onKeyDown={() => setClick1((prevState) => !prevState)}
          >
            <div className={click1 ? "label-note-0" : "label-note"}>
              <div className="black-text">
                グラドス　
                <br className="sp-display-none" />
                アド　
                <br className="sp-display-none" />
                パルナスム博士
                <br className="sp-display-none" />
                <br />
                01:51
              </div>
            </div>
            <div className={click1 ? "label-img" : "label-img-0"}>
              <Img fluid={data.green_toll.childImageSharp.fluid} />
              <div className="white-text">Doctor　Gradus　ad　Parnassum</div>
            </div>
          </div>
          <div
            className="label"
            onClick={() => setClick2((prevState) => !prevState)}
            onKeyDown={() => setClick2((prevState) => !prevState)}
          >
            <div className={click2 ? "label-note-0" : "label-note"}>
              <div className="black-text">
                月の光
                <br className="sp-display-none" />
                <br />
                04:56
              </div>
            </div>
            <div className={click2 ? "label-img" : "label-img-0"}>
              <Img fluid={data.moonlight_toll.childImageSharp.fluid} />
              <div className="white-text">Moonlight</div>
            </div>
          </div>
          <div
            className="label"
            onClick={() => setClick3((prevState) => !prevState)}
            onKeyDown={() => setClick3((prevState) => !prevState)}
          >
            <div className={click3 ? "label-note-0" : "label-note"}>
              <div className="black-text">
                亜麻色の
                <br className="sp-display-none" />
                髪の
                <br className="sp-display-none" />
                乙女
                <br className="sp-display-none" />
                <br />
                03:09
              </div>
            </div>
            <div className={click3 ? "label-img" : "label-img-0"}>
              <Img fluid={data.lafiile_toll.childImageSharp.fluid} />
              <div className="white-text">La　fille　aux　cheveux　de　lin</div>
            </div>
          </div>
          <div
            className="label"
            onClick={() => setClick4((prevState) => !prevState)}
            onKeyDown={() => setClick4((prevState) => !prevState)}
          >
            <div className={click4 ? "label-note-0" : "label-note"}>
              <div className="black-text">
                アラベスク　
                <br className="sp-display-none" />
                No. 1
                <br className="sp-display-none" />
                <br />
                04:24
              </div>
            </div>
            <div className={click4 ? "label-img" : "label-img-0"}>
              <Img fluid={data.pink_toll.childImageSharp.fluid} />
              <div className="white-text">Arabesque No. 1</div>
            </div>
          </div>
          <div
            className="label"
            onClick={() => setClick5((prevState) => !prevState)}
            onKeyDown={() => setClick5((prevState) => !prevState)}
          >
            <div className={click5 ? "label-note-0" : "label-note"}>
              <div className="black-text">
                ゴリウォーク
                <br className="sp-display-none" />
                の<br className="sp-display-none" />
                ケークウォーク
                <br className="sp-display-none" />
                <br />
                04:21
              </div>
            </div>
            <div className={click5 ? "label-img" : "label-img-0"}>
              <Img fluid={data.walk_toll.childImageSharp.fluid} />
              <div className="white-text">Golliwog's Cakewalk</div>
            </div>
          </div>
        </div>
      </section>
      <button className="next" aria-label="control">
        <Link to={`/page${page + 1}/`}>next▶︎</Link>
      </button>
    </>
  );
};

export default Section;
