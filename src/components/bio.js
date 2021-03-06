/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/visionisers-logo.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 48, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className='bio'>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className='bio-avatar'
          imgStyle={{
            borderRadius: `50%`
          }}
        />
      )}
      <p>Demo made by Visionisers team for Lawline</p>
    </div>
  )
}

export default Bio
