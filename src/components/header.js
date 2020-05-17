import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation.js"

const Header = ({ siteTitle }) => (
  <header>
    <Navigation siteTitle={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
