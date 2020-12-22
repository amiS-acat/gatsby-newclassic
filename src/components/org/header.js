import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const [mobileClick, setMobileClick] = useState(false)

  const data = useStaticQuery(graphql`
  query{
      file(relativePath: {eq: "images/name.png"}) {
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
      <header className={mobileClick ? "header-open" : "header"}>
        <div className="header__inner">
          {mobileClick ?
            <div className="icon"><Img fixed={data.file.childImageSharp.fixed} alt="" /></div>
            : <Link to={`/`} className="icon"><Img fixed={data.file.childImageSharp.fixed} alt="" /></Link>
          }
          <button
            onClick={() => setMobileClick(prevState => !prevState)}
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
        className={mobileClick ? "mobile-menu-open" : "mobile-menu"}
        onClick={() => setMobileClick(prevState => !prevState)}
      >
        <ul>
          <li>
            <Link to="/">1</Link>
          </li>
          <li>
            <Link to="/page2">2</Link>
          </li>
          <li>
            <Link to="/page3">3</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header