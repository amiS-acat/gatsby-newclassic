import React, { useState } from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

import Noctuelles from "../../players/Noctuellesflac";
import Oiseaux from "../../players/Oiseaux_tristes";
import Une from "../../players/Une_barque_sur_l'ocean";
import Alborada from "../../players/Alborada_del_gracioso";
import Vallee from "../../players/La_vallee_des_cloches";

const Section = () => {
  const [slides, setSlides] = useState(0);
  const [hover, setHover] = useState(0);
  const [stretchHover, setStretchHover] = useState(false);

  const cards = 4;

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/logo/name.png" }) {
        childImageSharp {
          fixed(width: 175) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      butterfly: file(relativePath: { eq: "images/icon/butterfly.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      boat: file(relativePath: { eq: "images/icon/boat.png" }) {
        childImageSharp {
          fixed(width: 77) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      wave: file(relativePath: { eq: "images/picture/wave.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sun: file(relativePath: { eq: "images/picture/sun.png" }) {
        childImageSharp {
          fixed(width: 210) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      clown: file(relativePath: { eq: "images/picture/clown.png" }) {
        childImageSharp {
          fixed(width: 84) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      bel: file(relativePath: { eq: "images/icon/bel.png" }) {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      play: file(relativePath: { eq: "images/icon/play-btn.png" }) {
        childImageSharp {
          fixed(width: 18) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="content-width">
        <div className="cards-container">
          <div className="vertical sp-display-none">
            Composed by French between 1904 and 1905.
          </div>
          <div className="img-container">
            <div className="img-under img-under--gray"></div>
            <div className="img-under img-under--large"></div>
            <div className="img-under">
              <div className="img-under-text">
                img
                <br />
                ･･･
                <br />
                newclassic
              </div>
            </div>
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
              <div className="img-wrapper" style={{ background: "#efd8dc" }}>
                <div className="img-text">
                  Noctuelles
                  <br />
                  04:19
                </div>
                <Img
                  fixed={data.butterfly.childImageSharp.fixed}
                  style={{ transform: "rotate(-30deg)" }}
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
              <div className="img-wrapper" style={{ background: "#aabbad" }}>
                <div className="img-text">
                  Oiseaux tristes
                  <br />
                  03:34
                  <div className="tag-subText"></div>
                </div>
                <FontAwesomeIcon className="img--bird" icon={faCrow} />
                <div className="eye">●</div>
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
                style={{ background: "rgb(197 224 218)" }}
              >
                <div className="img-text">
                  Une barque sur l'océan
                  <br />
                  06:43
                  <div className="tag-subText"></div>
                </div>
                <Img
                  className="img--boat"
                  fixed={data.boat.childImageSharp.fixed}
                />
                <Img
                  className="img--wave"
                  fluid={data.wave.childImageSharp.fluid}
                />
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
                style={{ background: "rgb(226 165 165)" }}
              >
                <div className="img-text">
                  Alborada del gracioso
                  <br />
                  05:57
                </div>
                <Img
                  className="img--sun"
                  fixed={data.sun.childImageSharp.fixed}
                />
                <Img
                  className="img--guy"
                  fixed={data.clown.childImageSharp.fixed}
                />
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
                <div className="img-text">
                  La vallée des cloches
                  <br />
                  04:42
                </div>
                <Img
                  fixed={data.bel.childImageSharp.fixed}
                  style={{ position: "absolute", top: "5px", left: "-10px" }}
                />
              </div>
            </div>
          </div>
          <div className={slides === 0 ? "note-active" : " note-none"}>
            <div>
              <span className="text--black">No.　1</span>/ 5
              <div className="bar--black"></div>
            </div>
            <br />
            <button
              className="play-btn"
              onMouseOver={() => setStretchHover(true)}
              onMouseOut={() => setStretchHover(false)}
            >
              {slides === 0 ? <Noctuelles /> : ""}
              <div className="display-flex">
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
            <div className="sp-display-none">
              <br />蛾<br />
              納屋の夜蛾は
              <br />
              ばたばたと飛び立っては
              <br />
              他の梁にとまって
              <br />
              蝶ネクタイとなる
              <br />
              （ファルグの詩の一節）
            </div>
          </div>
          <div className={slides === 1 ? "note-active" : " note-none"}>
            <div>
              <span className="text--black">No.　2</span>/ 5
              <div className="bar--black"></div>
            </div>
            <br />
            <button
              className="play-btn"
              onMouseOver={() => setStretchHover(true)}
              onMouseOut={() => setStretchHover(false)}
            >
              {slides === 1 ? <Oiseaux /> : ""}
              <div className="display-flex">
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
            <div className="sp-display-none">
              <br />
              悲しい鳥たち
              <br />
              夏のとりわけ暑い日に、
              <br />
              暑さで眩み
              <br />
              迷い子になった鳥たち
              <br />
              真夏の光も届かない、
              <br />
              ほの暗い森の中で
              <br />
              動けなくなった鳥たちは
              <br />
              ひっそりと息絶える
              <br />
              （ビニェスの言葉から）
            </div>
          </div>
          <div className={slides === 2 ? "note-active" : " note-none"}>
            <div>
              <span className="text--black">No.　3</span>/ 5
              <div className="bar--black"></div>
            </div>
            <br />
            <button
              className="play-btn"
              onMouseOver={() => setStretchHover(true)}
              onMouseOut={() => setStretchHover(false)}
            >
              {slides === 2 ? <Une /> : ""}
              <div className="display-flex">
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
            <div className="sp-display-none">
              <br />
              海原の小舟
              <br />
              社会情勢に流されていく
              <br />
              気まぐれな波に身を任せるしかない人々の悲しさと愚かさが描かれていると言われています
            </div>
          </div>
          <div className={slides === 3 ? "note-active" : " note-none"}>
            <div>
              <span className="text--black">No.　4</span>/ 5
              <div className="bar--black"></div>
            </div>
            <br />
            <button
              className="play-btn"
              onMouseOver={() => setStretchHover(true)}
              onMouseOut={() => setStretchHover(false)}
            >
              {slides === 3 ? <Alborada /> : ""}
              <div className="display-flex">
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
            <div className="sp-display-none">
              <br />
              道化師の朝の歌
              <br />
              朝の歌とあるが、
              <br />
              要するに朝帰りの歌
              <br />
              この曲のみ
              <br />
              タイトルがスペイン語
              <br />
              フラメンコダンサーとの情熱的な一夜の恋が
              <br />
              描かれているのかも
            </div>
          </div>
          <div className={slides === 4 ? "note-active" : " note-none"}>
            <div>
              <span className="text--black">No.　5</span>/ 5
              <div className="bar--black"></div>
            </div>
            <br />
            <button
              className="play-btn"
              onMouseOver={() => setStretchHover(true)}
              onMouseOut={() => setStretchHover(false)}
            >
              {slides === 4 ? <Vallee /> : ""}
              <div className="display-flex">
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
            <div className="sp-display-none">
              <br />
              鐘の谷
              <br />
              正午いっせいに鳴り響く
              <br />
              パリじゅうの教会の鐘の音からインスピレーションを得たという。
              <br />
              重なり合い響き合う鐘の音は何を表しているのでしょうか…
            </div>
          </div>
        </div>
        <div
          className={
            slides === 0
              ? "pc-display-none sp-text"
              : slides === 1
              ? "pc-display-none sp-text sp-text-none"
              : slides === 2
              ? "pc-display-none sp-text sp-text-none"
              : slides === 3
              ? "pc-display-none sp-text sp-text-none"
              : "pc-display-none sp-text sp-text-none"
          }
        >
          <br />蛾<br />
          納屋の夜蛾は
          <br />
          ばたばたと飛び立っては
          <br />
          他の梁にとまって
          <br />
          蝶ネクタイとなる
          <br />
          （ファルグの詩の一節）
        </div>
        <div
          className={
            slides === 0
              ? "pc-display-none sp-text sp-text-none"
              : slides === 1
              ? "pc-display-none sp-text"
              : slides === 2
              ? "pc-display-none sp-text sp-text-none"
              : slides === 3
              ? "pc-display-none sp-text sp-text-none"
              : "pc-display-none sp-text sp-text-none"
          }
        >
          <br />
          悲しい鳥たち
          <br />
          夏のとりわけ暑い日に、
          <br />
          暑さで眩み
          <br />
          迷い子になった鳥たち
          <br />
          真夏の光も届かない、
          <br />
          ほの暗い森の中で
          <br />
          動けなくなった鳥たちは
          <br />
          ひっそりと息絶える
          <br />
          （ビニェスの言葉から）
        </div>
        <div
          className={
            slides === 0
              ? "pc-display-none sp-text sp-text-none"
              : slides === 1
              ? "pc-display-none sp-text sp-text-none"
              : slides === 2
              ? "pc-display-none sp-text"
              : slides === 3
              ? "pc-display-none sp-text sp-text-none"
              : "pc-display-none sp-text sp-text-none"
          }
        >
          <br />
          海原の小舟
          <br />
          社会情勢に流されていく
          <br />
          気まぐれな波に身を任せるしかない人々の悲しさと愚かさが描かれていると言われています
        </div>
        <div
          className={
            slides === 0
              ? "pc-display-none sp-text sp-text-none"
              : slides === 1
              ? "pc-display-none sp-text sp-text-none"
              : slides === 2
              ? "pc-display-none sp-text sp-text-none"
              : slides === 3
              ? "pc-display-none sp-text"
              : "pc-display-none sp-text sp-text-none"
          }
        >
          <br />
          道化師の朝の歌
          <br />
          朝の歌とあるが、
          <br />
          要するに朝帰りの歌
          <br />
          この曲のみ
          <br />
          タイトルがスペイン語
          <br />
          フラメンコダンサーとの情熱的な一夜の恋が
          <br />
          描かれているのかも
        </div>
        <div
          className={
            slides === 0
              ? "pc-display-none sp-text sp-text-none"
              : slides === 1
              ? "pc-display-none sp-text sp-text-none"
              : slides === 2
              ? "pc-display-none sp-text sp-text-none"
              : slides === 3
              ? "pc-display-none sp-text sp-text-none"
              : "pc-display-nonesp-text"
          }
        >
          <br />
          鐘の谷
          <br />
          正午いっせいに鳴り響く
          <br />
          パリじゅうの教会の鐘の音からインスピレーションを得たという。
          <br />
          重なり合い響き合う鐘の音は何を表しているのでしょうか…
        </div>
      </div>
      <footer className="footer">
        <div className="navi__container scroll-container">
          <div className="navi">
            <a onClick={() => setSlides(0)} onMouseOver={() => setHover(0)}>
              No1
            </a>
            <a onClick={() => setSlides(1)} onMouseOver={() => setHover(1)}>
              No2
            </a>
            <a onClick={() => setSlides(2)} onMouseOver={() => setHover(2)}>
              No3
            </a>
            <a onClick={() => setSlides(3)} onMouseOver={() => setHover(3)}>
              No4
            </a>
            <a onClick={() => setSlides(4)} onMouseOver={() => setHover(4)}>
              No5
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
        <Link to="/" className="logo">
          newclassic
        </Link>
      </footer>
    </>
  );
};

export default Section;
