import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const [card, setCard] = useState(0);

  const data = useStaticQuery(graphql`
    {
      card: file(relativePath: { eq: "images/picture/card.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      card_favorite: file(
        relativePath: { eq: "images/picture/card--left.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      card_piano: file(relativePath: { eq: "images/picture/card--piano.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      card_cat: file(relativePath: { eq: "images/picture/card--cat.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      card_food: file(relativePath: { eq: "images/picture/card--food.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      card_sea: file(relativePath: { eq: "images/picture/card--sea.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      card_color: file(relativePath: { eq: "images/picture/card--color.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      card_tea: file(relativePath: { eq: "images/picture/card--tea.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="scroll-top" id="a01"></div>
      <h1 className="h1">Profile</h1>
      <div className="card-container">
        <div
          className={
            card === 0
              ? "card-container__inner card-container__inner--0"
              : "card-container__inner"
          }
          onClick={() => (card === 6 ? setCard(0) : setCard(card + 1))}
        >
          <div
            className={
              card === 0 ? "card-wrapper card-wrapper--0" : "card-wrapper"
            }
          >
            <Img
              className={
                card >= 1
                  ? "card card--left card--open card--left--open"
                  : "card"
              }
              fluid={data.card_favorite.childImageSharp.fluid}
            />
            <Img
              alt="tea"
              className={
                card === 6
                  ? "card card--right card"
                  : card === 7
                  ? "card card--right card--open card--none"
                  : "card card--none"
              }
              fluid={data.card_tea.childImageSharp.fluid}
            />
            <Img
              alt="color"
              className={
                card === 5
                  ? "card card--right card"
                  : card === 6
                  ? "card card--right card--open card--none"
                  : "card card--none"
              }
              fluid={data.card_color.childImageSharp.fluid}
            />
            <Img
              alt="sea"
              className={
                card === 4
                  ? "card card--right card"
                  : card === 5
                  ? "card card--right card--open card--none"
                  : "card card--none"
              }
              fluid={data.card_sea.childImageSharp.fluid}
            />
            <Img
              alt="tofu"
              className={
                card === 3
                  ? "card card--right card"
                  : card === 4
                  ? "card card--right card--open card--none"
                  : "card card--none"
              }
              fluid={data.card_food.childImageSharp.fluid}
            />
            <Img
              alt="cat"
              className={
                card === 2
                  ? "card card--right card"
                  : card === 3
                  ? "card card--right card--open card--none"
                  : "card card--none"
              }
              fluid={data.card_cat.childImageSharp.fluid}
            />
            <Img
              alt="piano"
              className={
                card === 1
                  ? "card card--right"
                  : card === 2
                  ? "card card--right card--open card--none"
                  : "card card--none"
              }
              fluid={data.card_piano.childImageSharp.fluid}
            />
            <Img
              className={card === 0 ? "card" : "card card--open"}
              fluid={data.card.childImageSharp.fluid}
              style={{ zIndex: card === 0 ? "0" : "-1" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Section;
