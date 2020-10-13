import React from "react"
import { Link } from "gatsby"

export default ()=>(
    <footer className="footer">
    <div className="footer__inner">
        <a className="icon">
            <Link to={`/`}><img src="../images/name.png" /></Link>
        </a>
        <ul>
            <li className="map-btn">
                <a href="mailto:newclassNameic.ja&#64;gmail.com">contact</a>
            </li>
        </ul>
    </div>
</footer>      
)