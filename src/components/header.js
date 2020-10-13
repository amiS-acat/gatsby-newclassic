import React from "react"
import { Link } from "gatsby"
 
export default () =>(
    <header className="header">
    <div className="header__inner">
        <a className="icon">
            <Link to={`/`}><img src="../images/name.png" /></Link>
        </a>
        <button className="mobile-menu__btn">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>
)