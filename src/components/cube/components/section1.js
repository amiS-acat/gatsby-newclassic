import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

import Noctuelles from "../player/Noctuellesflac";
import Oiseaux from "../player/Oiseaux_tristes";
import Une from "../player/Une_barque_sur_l'océan";
import Alborada from "../player/Alborada_del_gracioso";
import Vallee from "../player/La_vallée_des_cloches";

const Index = () => {
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
    }
  `);

  return (
    <>
      <section>
        <div className="Box">
          <Noctuelles />
          <div className="BlackBox">
            <Img fixed={data.butterfly.childImageSharp.fixed} />
            <div className="GrayBox"></div>
          </div>
          <div className="Box-text">
            Noctuelles <br className="pc-display-none" />
            <span className="title-font-size">蛾</span>
          </div>
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
        <div className="Box">
          <div className="Box-text">
            Oiseaux tristes <br className="pc-display-none" />
            <span className="title-font-size">悲しい鳥たち</span>
          </div>
          <Oiseaux />
          <div className="BlackBox">
            <FontAwesomeIcon icon={faCrow} />
            <div className="GrayBox"></div>
          </div>
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
        <div className="Box">
          <Une />
          <div className="BlackBox">
            <Img fixed={data.boat.childImageSharp.fixed} />
            <div className="GrayBox"></div>
          </div>
          <div className="Box-text">
            Une barque sur l'océan
            <br className="pc-display-none" />{" "}
            <span className="title-font-size">海原の小舟</span>
          </div>
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
        <div className="Box">
          <div className="Box-text">
            Alborada del gracioso
            <br className="pc-display-none" />
            <span className="title-font-size">道化師の朝の歌</span>
          </div>
          <Alborada />
          <div className="BlackBox">
            <Img fixed={data.clown.childImageSharp.fixed} />
            <div className="GrayBox"></div>
          </div>
        </div>
        <div className="text-desc">
          05:57
          <br />
          ミシェル・ディミトリー・カルヴォコレッシに献呈
          <br />
          スペインでの男の朝帰りの歌
        </div>
        <div className="Box">
          <Vallee />
          <div className="BlackBox">
            <Img fixed={data.bel.childImageSharp.fixed} />
            <div className="GrayBox"></div>
          </div>
          <div className="Box-text">
            La vallée des cloches
            <br className="pc-display-none" />
            <span className="title-font-size">鐘の谷</span>
          </div>
        </div>
        <div className="text-desc">
          04:42
          <br />
          モーリス・ドラージュに献呈
          <br />
          正午にいっせいに鳴り響く、パリじゅうの教会の鐘の音
        </div>
      </section>
    </>
  );
};

export default Index;
