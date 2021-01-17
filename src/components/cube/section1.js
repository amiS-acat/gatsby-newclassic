import React, { useState } from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

import Noctuelles from "../../players/Noctuellesflac";
import Oiseaux from "../../players/Oiseaux_tristes";
import Une from "../../players/Une_barque_sur_l'ocean";
import Alborada from "../../players/Alborada_del_gracioso";
import Vallee from "../../players/La_vallee_des_cloches";

const Section = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  const data = useStaticQuery(graphql`
    {
      butterfly: file(relativePath: { eq: "images/icon/butterfly.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      boat: file(relativePath: { eq: "images/icon/boat.png" }) {
        childImageSharp {
          fixed(width: 70) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      clown: file(relativePath: { eq: "images/icon/clown.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      bel: file(relativePath: { eq: "images/icon/bel.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      butterfly_color: file(
        relativePath: { eq: "images/icon/butterfly_color.png" }
      ) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      boat_color: file(relativePath: { eq: "images/icon/boat_color.png" }) {
        childImageSharp {
          fixed(width: 70) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      clown_color: file(relativePath: { eq: "images/icon/clown_color.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      bel_color: file(relativePath: { eq: "images/icon/bel_color.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <section>
        <div className="Box" id="a01">
          <div
            className="player"
            onClick={() => setClick1((preveState) => !preveState)}
            onKeyDown={() => setClick1((preveState) => !preveState)}
          >
            <Noctuelles />
          </div>
          <div className="BlackBox">
            <Img
              fixed={
                click1
                  ? data.butterfly_color.childImageSharp.fixed
                  : data.butterfly.childImageSharp.fixed
              }
            />
          </div>
          <div className="Box-text">
            <div className="display-inline-block">
              Noctuelles <br className="pc-display-none" />
              <span className="title-font-size">蛾</span>
              <div className="under--black"></div>
            </div>
            <div className="text-desc">
              04:19
              <br />
              レオン＝ポール・ファルグに献呈
              <br />
              短い影のある小さな駅 の一節より
              <br />
              納屋の夜蛾は、ばたばたと飛び立っては他の梁にとまって蝶ネクタイとなる
            </div>
          </div>
        </div>
        <div className="Box" id="a02">
          <div className="Box-text">
            <div className="display-inline-block">
              Oiseaux tristes <br className="pc-display-none" />
              <span className="title-font-size">悲しい鳥たち</span>
              <div className="under--black"></div>
            </div>
            <div className="text-desc">
              03:34
              <br />
              リカルド・ビニェスに献呈
              <br />
              夏のとりわけ暑い日に、
              <br className="pc-display-none" />
              暑さで眩み迷い子になった鳥たちの姿
              <br />
              真夏の光も届かない、ほの暗い森の中で
              <br className="pc-display-none" />
              動けなくなった鳥たちは、
              <br className="pc-display-none" />
              ひっそりと息絶える
            </div>
          </div>
          <div
            className="player"
            onClick={() => setClick2((preveState) => !preveState)}
            onKeyDown={() => setClick2((preveState) => !preveState)}
          >
            <Oiseaux />
          </div>
          <div
            className="BlackBox"
            style={{ color: click2 ? "green" : "white" }}
          >
            <FontAwesomeIcon icon={faCrow} />
          </div>
        </div>
        <div className="Box whiteBox" id="a03">
        <FontAwesomeIcon className="bird--white" icon={faCrow} />
        <span className="eye">●</span>
        <FontAwesomeIcon className="bird--white bird--white--2" icon={faCrow} />
        <span className="eye--2"></span>
          <div className="whiteBox__inner">
            <div
              onClick={() => setClick3((preveState) => !preveState)}
              onKeyDown={() => setClick3((preveState) => !preveState)}
            >
              <Une />
            </div>
            <div className="BlackBox">
              <Img
                fixed={
                  click3
                    ? data.boat_color.childImageSharp.fixed
                    : data.boat.childImageSharp.fixed
                }
              />
            </div>
            <div className="Box-text">
              <div className="display-inline-block">
                Une barque sur l'océan
                <br className="pc-display-none" />
                <span className="title-font-size">海原の小舟</span>
                <div className="under--black"></div>
              </div>
              <div className="text-desc">
                06:43
                <br />
                ポール・ソルドに献呈
                <br />
                葛飾北斎による富嶽三十六景の
                <br className="pc-display-none" />
                「神奈川沖浪裏」より
              </div>
            </div>
          </div>
        </div>
        <div className="Box" id="a04">
          <div className="Box-text">
            <div className="display-inline-block">
              Alborada del gracioso
              <br className="pc-display-none" />
              <span className="title-font-size">道化師の朝の歌</span>
              <div className="under--black"></div>
            </div>
            <div className="text-desc">
              05:57
              <br />
              ミシェル・ディミトリー・カルヴォコレッシに献呈
              <br />
              スペインでの男の朝帰りの歌
            </div>
          </div>
          <div
            onClick={() => setClick4((preveState) => !preveState)}
            onKeyDown={() => setClick4((preveState) => !preveState)}
          >
            <Alborada />
          </div>
          <div className="BlackBox">
            <Img
              fixed={
                click4
                  ? data.clown_color.childImageSharp.fixed
                  : data.clown.childImageSharp.fixed
              }
            />
          </div>
        </div>
        <div className="Box" id="a05">
          <div
            onClick={() => setClick5((preveState) => !preveState)}
            onKeyDown={() => setClick5((preveState) => !preveState)}
          >
            <Vallee />
          </div>
          <div className="BlackBox">
            <Img
              fixed={
                click5
                  ? data.bel_color.childImageSharp.fixed
                  : data.bel.childImageSharp.fixed
              }
            />
          </div>
          <div className="Box-text">
            <div className="display-inline-block">
              La vallée des cloches
              <br className="pc-display-none" />
              <span className="title-font-size">鐘の谷</span>
              <div className="under--black"></div>
            </div>
            <div className="text-desc">
              04:42
              <br />
              モーリス・ドラージュに献呈
              <br />
              正午にいっせいに鳴り響く、パリじゅうの教会の鐘の音
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
