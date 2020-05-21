import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation.js"
import Headroom from "react-headroom"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <header>
      <Navigation siteTitle={siteTitle} />
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
