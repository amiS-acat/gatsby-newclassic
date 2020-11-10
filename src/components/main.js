import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Main = () => {
    // const data = useStaticQuery(graphql`
    // query
    // `)

    return (
        <div className="maincontainer">
            <div className="maincontainer__inner">
                <div className="main">
                    <div className="main__inner">
                        <div className="video">
                            <div className="iframe__outer">
                                <iframe
                                    src="https://www.youtube.com/embed/W_4Yx8M74EI"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                />
                            </div>
                        </div>
                        <div className="iframe__under">
                        </div>
                        <div className="video__descript">
                            test
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main