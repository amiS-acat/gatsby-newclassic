import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const [click, setClick] = useState(false)

  const data = useStaticQuery(graphql`
  query{
      file(relativePath: {eq: "name.png"}) {
        childImageSharp {
          fixed(width: 175) {
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
    <>
      <header className={click ? "header-open" : "header"}>
        <div className="header__inner">
          {click ?
            <div className="icon"><Img fixed={data.file.childImageSharp.fixed} alt="" /></div>
            : <Link to={`/`} className="icon"><Img fixed={data.file.childImageSharp.fixed} alt="" /></Link>
          }
          <button
            onClick={() => setClick(prevState => !prevState)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className="header__under">
      </div>
      <nav
        className={click ? "mobile-menu-open" : "mobile-menu"}
        onClick={() => setClick(prevState => !prevState)}
      >
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">about us!</a>
          </li>
          <li>
            <a href="">column</a>
          </li>
          <li>
            <a href="mailto:newclassic.ja&#64;gmail.com">contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header