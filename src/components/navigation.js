import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"

const Navigation = ({ siteTitle }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Link to="/" aria-label="Home page">
      <Navbar.Brand>
        <span>{siteTitle}</span>
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="main-nav" />
    <Navbar.Collapse id="main-nav">
      <Nav className="ml-auto">
        <Link activeClassName="active" className="nav-link" to="/now">
          /now
        </Link>
        <Link activeClassName="active" className="nav-link" to="/blog">
          /blog
        </Link>
        {/* <Link activeClassName="active" className="nav-link" to="/music">
          /music
        </Link> */}
        <Link activeClassName="active" className="nav-link" to="/reads">
          /reads
        </Link>
        <Link activeClassName="active" className="nav-link" to="/games">
          /games
        </Link>
        <Link activeClassName="active" className="nav-link" to="/uses">
          /uses
        </Link>
        <span className="navbar-social">
          <a className="nav-link" href="https://twitter.com/burgbits/" title="Twitter" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" focusable="false"><title>Twitter</title><path d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92" fill="currentColor"></path></svg>
          </a>
          <a className="nav-link" href="https://www.linkedin.com/in/brianhamburg/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="1em" focusable="false"><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="currentColor" /><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#e30613" /></svg>
          </a>
          <a className="nav-link" href="https://github.com/bhamburg/" title="GitHub" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" focusable="false"><title>GitHub</title><path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" fill="currentColor" fillRule="evenodd"></path></svg>
          </a>
          <a className="nav-link" href="https://gitlab.com/bhamburg/" title="GitLab" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em"><title>GitLab</title><path d="M120.548,48.424c-2.785-7.996-14.104-7.996-16.979,0L52.813,205.457h118.583    C171.306,205.457,120.548,48.424,120.548,48.424z M26.849,284.512c-2.336,7.188,0.271,15.183,6.379,19.765l222.703,165.296    L52.722,205.457L26.849,284.512z M171.306,205.457l84.715,264.115l84.715-264.115H171.306z M485.189,284.512l-25.872-79.055    L256.021,469.572l222.703-165.296C484.92,299.694,487.436,291.699,485.189,284.512z M408.471,48.424    c-2.785-7.996-14.104-7.996-16.979,0l-50.848,157.033h118.584L408.471,48.424z" fill="currentColor"></path></svg>
          </a>
          <a className="nav-link" href="https://codepen.io/bhamburg/" title="CodePen" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="1em"><path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z" fill="currentColor" /></svg>
          </a>
        </span>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation