import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Index = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  
  const data = useStaticQuery(graphql`
    {
      green_toll: file(relativePath: { eq: "images/green.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      moonlight_toll: file(relativePath: { eq: "images/moonlight.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      lafiile_toll: file(relativePath: { eq: "images/lafiile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      pink_toll: file(relativePath: { eq: "images/pink.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      walk_toll: file(relativePath: { eq: "images/walk.jpg" }) {
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
      <div className="content-width">
        <div className="title">program note</div>
        <section style={{ margin: "40px 0" }}>
          <div className="display-flex-block">
            <div
              className="label"
              onClick={() => setClick1((prevState) => !prevState)}
            >
              <div className={click1 ? "label-note-0" : "label-note"}>
                <div className="black-text">
                  グラドス
                  <br />
                  アド
                  <br />
                  パルナスム博士
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
            >
              <div className={click2 ? "label-note-0" : "label-note"}>
                <div className="black-text">月の光</div>
              </div>
              <div className={click2 ? "label-img" : "label-img-0"}>
                <Img fluid={data.moonlight_toll.childImageSharp.fluid} />
                <div className="white-text">Moonlight</div>
              </div>
            </div>
            <div
              className="label"
              onClick={() => setClick3((prevState) => !prevState)}
            >
              <div className={click3 ? "label-note-0" : "label-note"}>
                <div className="black-text">
                  亜麻色の
                  <br />
                  髪の
                  <br />
                  乙女
                </div>
              </div>
              <div className={click3 ? "label-img" : "label-img-0"}>
                <Img fluid={data.lafiile_toll.childImageSharp.fluid} />
                <div className="white-text">
                  La　fille　aux　cheveux　de　lin
                </div>
              </div>
            </div>
            <div
              className="label"
              onClick={() => setClick4((prevState) => !prevState)}
            >
              <div className={click4 ? "label-note-0" : "label-note"}>
                <div className="black-text">
                  アラベスク
                  <br />
                  No. 1
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
            >
              <div className={click5 ? "label-note-0" : "label-note"}>
                <div className="black-text">
                  ゴリウォーク
                  <br />
                  の
                  <br />
                  ケークウォーク
                </div>
              </div>
              <div className={click5 ? "label-img" : "label-img-0"}>
                <Img fluid={data.walk_toll.childImageSharp.fluid} />
                <div className="white-text">Golliwog's Cakewalk</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
