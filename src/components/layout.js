import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const data = useStaticQuery(graphql`
    query st {
      st: file(absolutePath: { regex: "/header-logo-lawline.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js

  const st = data?.st?.childImageSharp?.fixed

  //if (isRootPath) {
  header = (
    <>
      <h1 className='main-heading'>
        {st && (
          <>
            <Image
              fixed={st}
              className='bio-avatar'
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            &nbsp;
          </>
        )}
        <Link to='/'>{title}</Link>
      </h1>
      <div>
        <br />
        Vi gör juridiken enkel
      </div>
    </>
  )

  // } else {
  //   header = (
  //     <Link className='header-link-home' to='/'>
  //       {title}
  //     </Link>
  //   )
  // }
  return (
    <div className='global-wrapper' data-is-root-path={isRootPath}>
      <header className='global-header'>{header}</header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  )
}

export default Layout
