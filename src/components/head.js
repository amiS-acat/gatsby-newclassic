import React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery , graphql} from 'gatsby'

export default ({pagetitle,pagedesc,pagepath}) => {
    const {site:{siteMetadata}} = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                    lang
                    description
                    siteUrl
                }
            }
        }
    `)

    const title = pagetitle
        ?`${pagetitle} | ${siteMetadata.title}`
        :siteMetadata.title
    const description = pagedesc || siteMetadata.description
    // const url = pagepath
    //   ?`${siteMetadata.siteUrl}${pagepath}`
    //   :siteMetadata.siteUrl

    return (
        <Helmet>
            <html lang={siteMetadata.lang} />
            <title>{title}</title>
            <meta
                name='description'
                content={description}
            />
            {/* <link rel="canonical" href={url} /> */}
        </Helmet>
    )
}