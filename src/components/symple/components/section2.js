import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

import Doctor from "../players/Doctor";
import Moonlight from "../players/Moonlight";
import LaFiile from "../players/LaFille";
import Arabesque from "../players/Arabesque";
import Golliwog from "../players/Golliwog";

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      flag: file(relativePath: { eq: "images/france.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      green: file(relativePath: { eq: "images/green.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      moonlight: file(relativePath: { eq: "images/moonlight.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      lafiile: file(relativePath: { eq: "images/lafiile.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      pink: file(relativePath: { eq: "images/pink.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      walk: file(relativePath: { eq: "images/walk.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <>
      <div className="content-width">
        <div className="title">gallery</div>
        <section>
          <div className="mini-sircle">
            country
            <div className="text-align-center">
              <Img fixed={data.flag.childImageSharp.fixed} />
            </div>
          </div>
          <div className="mini-sircle">
            age
            <div className="text-align-center">
              <span>1862 - 1918</span>
            </div>
          </div>
          <div className="mini-sircle">
            play
            <div className="text-align-center">
              <FontAwesomeIcon icon={faHandPointRight} />
            </div>
          </div>
          <div className="mini-sircle">
            <Doctor />
            <Img className="sircle" fixed={data.green.childImageSharp.fixed} />
          </div>
          <div className="mini-sircle">
            <Moonlight />
            <Img
              className="sircle"
              fixed={data.moonlight.childImageSharp.fixed}
            />
          </div>
          <div className="mini-sircle">
            <LaFiile />
            <Img
              className="sircle"
              fixed={data.lafiile.childImageSharp.fixed}
            />
          </div>
          <div className="mini-sircle">
            <Arabesque />
            <Img className="sircle" fixed={data.pink.childImageSharp.fixed} />
          </div>
          <div className="mini-sircle">
            <Golliwog />
            <Img className="sircle" fixed={data.walk.childImageSharp.fixed} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
