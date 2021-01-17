import React, { useState } from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import White from "../../players/White Peacock";
import Night from "../../players/Nightfall";
import Acqua from "../../players/The Fountain of the Acqua Paola";
import Clouds from "../../players/Clouds";

const Section = () => {
  const [slides, setSlides] = useState(0);
  const [hover, setHover] = useState(0);
  const [stretchHover, setStretchHover] = useState(false);

  const cards = 4;

  const data = useStaticQuery(graphql`
    {
      griffes: file(relativePath: { eq: "images/photo/griffes.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      griffes_sp: file(relativePath: { eq: "images/photo/griffes_sp.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
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
      clouds: file(relativePath: { eq: "images/photo/clouds.png" }) {
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
      frame: file(relativePath: { eq: "images/picture/frame1.png" }) {
        childImageSharp {
          fixed(width: 26) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <header className="header">
        <div className="title">Roman Sketches</div>
        <div className="header__inner scroll-container">
          <div className="header-navi">
            <a onClick={() => setSlides(0)} onMouseOver={() => setHover(0)}>
              Composer
            </a>
            <a onClick={() => setSlides(1)} onMouseOver={() => setHover(1)}>
              No1
            </a>
            <a onClick={() => setSlides(2)} onMouseOver={() => setHover(2)}>
              No2
            </a>
            <a onClick={() => setSlides(3)} onMouseOver={() => setHover(3)}>
              No3
            </a>
            <a onClick={() => setSlides(4)} onMouseOver={() => setHover(4)}>
              No4
            </a>
          </div>
          <div className="underLine-wrapper">
            <div
              className={
                hover == 0
                  ? "underLine"
                  : hover == 1
                  ? "underLine underLine--1"
                  : hover == 2
                  ? "underLine underLine--2"
                  : hover == 3
                  ? "underLine underLine--3"
                  : "underLine underLine--4"
              }
            ></div>
          </div>
        </div>
      </header>
      <div className="cards-content__inner">
        <div className="section display-flex-block">
          <Img
            fixed={data.frame.childImageSharp.fixed}
            className="frame sp-display-none"
          />
          <div className="img-container">
            <div
              onClick={() => {
                setHover(1);
                slides === cards ? setSlides(0) : setSlides(slides + 1);
              }}
              onKeyDown={() => {
                setHover(1);
                slides === cards ? setSlides(0) : setSlides(slides + 1);
              }}
              className={
                slides === 0
                  ? "img-active"
                  : slides <= 2
                  ? "img-prev"
                  : "img-next"
              }
            >
              <div className="img-wrapper" style={{ background: "#aabbad" }}>
                <div className="tag">
                  <div className="tag-text" style={{ textAlign: "right" }}>
                    Griffes
                  </div>
                </div>
                <Img
                  className="pc-display-none"
                  fluid={data.griffes_sp.childImageSharp.fluid}
                />
                <Img
                  className="sp-display-none"
                  fluid={data.griffes.childImageSharp.fluid}
                />
              </div>
            </div>
            <div
              onClick={() => {
                setHover(2);
                slides === cards ? setSlides(1) : setSlides(slides + 1);
              }}
              onKeyDown={() => {
                setHover(2);
                slides === cards ? setSlides(1) : setSlides(slides + 1);
              }}
              className={
                slides === 1
                  ? "img-active"
                  : slides === 2
                  ? "img-prev"
                  : slides === 3
                  ? "img-prev"
                  : "img-next"
              }
            >
              <div className="img-wrapper" style={{ background: "#efd8dc" }}>
                <div className="tag  tag--1">
                  <div className="tag-text">
                    The White Peacock
                    <div className="tag-subText">
                      Pale, pale as the breath of blue smoke in far woodlands.
                      <br />
                      Here, as the breath, as the soul of this beauty,
                      <br />
                      White as a cloud through the heats of the noontide
                      <br />
                      Moves the White Peacock.
                    </div>
                  </div>
                </div>
                <Img fluid={data.peacock.childImageSharp.fluid} />
              </div>
            </div>
            <div
              onClick={() => {
                setHover(3);
                slides === 3 ? setSlides(2) : setSlides(slides + 1);
              }}
              onKeyDown={() => {
                setHover(3);
                slides === 3 ? setSlides(2) : setSlides(slides + 1);
              }}
              className={
                slides === 2
                  ? "img-active"
                  : slides >= 3
                  ? "img-prev"
                  : "img-next"
              }
            >
              <div
                className="img-wrapper"
                style={{ background: "rgb(123 81 160)" }}
              >
                <div className="tag tag--2">
                  <div className="tag-text" style={{ textAlign: "right" }}>
                    Nightfall
                    <div className="tag-subText tag-subText--2">
                      The long day is over.
                      <br />
                      Dusk, and silence now:
                      <br />
                      And Night, that is as dew
                      <br />
                      On the Flower of the World.
                    </div>
                  </div>
                </div>
                <Img fluid={data.sunset.childImageSharp.fluid} />
              </div>
            </div>
            <div
              onClick={() => {
                setHover(4);
                slides === cards ? setSlides(3) : setSlides(slides + 1);
              }}
              onKeyDown={() => {
                setHover(4);
                slides === cards ? setSlides(3) : setSlides(slides + 1);
              }}
              className={
                slides === 3
                  ? "img-active"
                  : slides === 4
                  ? "img-prev"
                  : slides === 0
                  ? "img-prev"
                  : "img-next"
              }
            >
              <div
                className="img-wrapper"
                style={{ background: "rgb(197 224 218)" }}
              >
                <div className="tag" style={{ top: "34px", color: "white" }}>
                  <div className="tag-text tag-text--2">
                    The Fountain of the <br />
                    Acqua Paola
                    <div className="tag-subText" style={{ marginLeft: "6px" }}>
                      Shimmering lights
                      <br />
                      As through the Aurora's
                      <br />
                      Wild polar fires
                      <br />
                      Flashed in thy happy bubbles, died in thy foam.
                    </div>
                  </div>
                </div>
                <Img fluid={data.water.childImageSharp.fluid} />
              </div>
            </div>
            <div
              onClick={() => {
                setHover(0);
                slides === cards ? setSlides(0) : setSlides(slides + 1);
              }}
              onKeyDown={() => {
                setHover(0);
                slides === cards ? setSlides(0) : setSlides(slides + 1);
              }}
              className={
                slides === 4
                  ? "img-active"
                  : slides <= 1
                  ? "img-prev"
                  : "img-next"
              }
            >
              <div
                className="img-wrapper"
                style={{ background: "rgb(241 228 206)" }}
              >
                <div className="tag" style={{ top: "14px" }}>
                  <div className="tag-text tag-text--4">
                    Clouds
                    <div className="tag-subText">
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
                </div>
                <Img fluid={data.clouds.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          <div className="note-container">
            <div className={slides === 0 ? "note-active" : " note-none"}>
              チャールズ・トムリンソン・グリフス
              <br />
              (1884-1920)
              <br />
              アメリカ合衆国の作曲家・音楽教師
              <br />
              ヨーロッパ滞在中にフランス印象派音楽のエキゾチックで神秘的な音に魅了され、後の作品に大きな影響を受けている。
              <br />
              4つのローマのスケッチは1917年に出版された印象派音楽です。
              <br />
              各曲は英国の詩人、ウィリアムシャープ（1855-1905）のコレクション「Sospiridi
              Roma」の詩からの抜粋に触発されており、序文が付けられています。
            </div>
            <div className={slides === 1 ? "note-active" : " note-none"}>
              白孔雀
              <br />
              淡い、遠い森の中の青い煙の息吹のように、淡い。
              <br />
              ここに、息吹のように、この美の魂のように、
              <br />
              正午の熱気の中の雲のように白く、
              <br />
              白孔雀は動く
              <br />
            </div>
            <div className={slides === 2 ? "note-active" : " note-none"}>
              長い一日が終わった。
              <br />
              夕暮れ、そして沈黙：
              <br />
              そして夜は、世界の花の露のよう
            </div>
            <div className={slides === 3 ? "note-active" : " note-none"}>
              煌めく光
              <br />
              オーロラを透かしたように
              <br />
              野生の極火が
              <br />
              あなたの幸せの気泡で閃き、
              <br />
              あなたの泡沫の中で死んだ
            </div>
            <div className={slides === 4 ? "note-active" : " note-none"}>
              山の栄光は、
              <br />
              見事に動き；
              <br />
              とてもゆっくり崩れていく、
              <br />
              誰も気づくことなく
              <br />
              黄金のドームが
              <br />
              限りない雪の谷間に沈んでいく
            </div>
          </div>
          <button
            className={
              slides == 0 ? "play-container display-none" : "play-container"
            }
            onMouseOver={() => setStretchHover(true)}
            onMouseOut={() => setStretchHover(false)}
          >
            {slides === 1 ? (
              <White />
            ) : slides === 2 ? (
              <Night />
            ) : slides === 3 ? (
              <Acqua />
            ) : (
              <Clouds />
            )}
            <div className="display-flex" style={{ fontSize: "52px" }}>
              play
              <Img fixed={data.play.childImageSharp.fixed} />
            </div>
            <div
              className={
                stretchHover
                  ? "play-underLine play-underLine--stretch"
                  : "play-underLine"
              }
            ></div>
          </button>
          <Img
            className="sp-display-none frame"
            fixed={data.frame.childImageSharp.fixed}
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      </div>
    </>
  );
};

export default Section;
