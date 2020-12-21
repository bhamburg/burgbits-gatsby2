/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Headroom from "react-headroom"

import "./layout.scss"

import Navigation from "./navigation.js"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Headroom disableInlineStyles>
        <Navigation siteTitle={data.site.siteMetadata.title} />
      </Headroom>
      {children}
      <footer className="bg-dark text-muted">
        <Container className="text-center">
          Copyright © {new Date().getFullYear()} Brian Hamburg
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
