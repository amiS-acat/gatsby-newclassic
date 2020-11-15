import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

import 'bootstrap/dist/css/bootstrap.min.css';

const FirstView = () => {
    const data = useStaticQuery(graphql`
        {
            bc1:file(relativePath: {eq: "slide-bc1.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 1100) {
                    aspectRatio
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
              }
              bc2:file(relativePath: {eq: "slide-bc2.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 1100) {
                    aspectRatio
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
              }
        }
    `)

    return (
        <div class="swiper-container">
            <Carousel>
                <Carousel.Item>
                    <Img fluid={data.bc1.childImageSharp.fluid}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Img fluid={data.bc2.childImageSharp.fluid}/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default FirstView