import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "paper.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 550) {
                src
                srcSet
                srcSetWebp
                srcWebp
                base64
                aspectRatio
                sizes
            }
          }
        }
    }
    `)

    return (
        <div className="maincontainer">
            <div className="maincontainer__inner">
                <div className="main">
                    <div className="main__inner">
                        <h2>Playlist 1</h2>
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
                        <div className="index">
                            <div className="index__alph">Doctor Gradus ad parnassum/debussy</div>
                            <p class="index__ja">グラドゥス・アド・パルナッスム博士/ドビュッシー</p>
                            <div className="index__alph">La marchande d'eau fraîche/ibert</div>
                            <p class="index__ja">水売り女/イベール</p>
                            <div className="index__alph">Sicilienne/Koechlin</div>
                            <p class="index__ja">シシリエンヌ/ケクラン</p>
                            <div className="index__alph">The Fountain of the Aqua Paola/Griffis</div>
                            <p class="index__ja">アクア・パオラ/グリフィス</p>
                            <div className="index__alph">Sonatine No1."Modere"/Ravel</div>
                            <p class="index__ja">ソナチネ No1.モデラート/ラヴェル</p>
                            <div className="index__alph">Rhapsody from Theam of paganini　Variation18/Rachmaninov</div>
                            <p class="index__ja">パガニーニの主題による狂詩曲 第18変奏/ラフマニノフ</p>
                            <div className="index__alph">Je te veux/Satie</div>
                            <p class="index__ja">ジュ トゥ ヴー/サティ</p>
                            <div className="index__alph">Equinox for Piano/Ireland</div>
                            <p class="index__ja">イークィノクス/アイアランド</p>
                            <div className="index__alph">Liszt/Love Dream　no.3</div>
                            <p class="index__ja">愛の夢　第3番/リスト</p>
                            <div className="index__alph">Minute Waltz/Chopin</div>
                            <p class="index__ja">子犬のワルツ/ショパン</p>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Main