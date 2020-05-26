<<<<<<< HEAD
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)
=======
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import { Jumbotron, Container, Row, Col } from "react-bootstrap"

const Header = ({ title, subtitle, text, img }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "nw-beach.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage 
      Tag={`header`}
      fluid={data.backgroundImage.childImageSharp.fluid}
      className="p-0"
    >
      <Jumbotron 
        className="jumbotron-fluid text-light m-0 h-100"
      >
        <Container>
          <Row>
            <Col xs={{ span: 12 }} md={{ span: 4, order: 2 }} lg={{ span: 3 }} className="mb-4 mb-md-0">
              <Img fluid={img} className="circle-photo" />
            </Col>
            <Col xs={{ span: 12 }} md={{ order: 1 }}>
              <h1 className="bigtext">{title}</h1>
              <p className="h2">{subtitle}</p>
              <p className="text-muted h3">
                {`${text} `}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="1em">
                  <polygon points="120,65 120,75 110,75 110,65 100,65 100,55 100,45 100,35 90,35 90,45 80,45 80,35 70,35 70,45 60,45 
                    60,35 50,35 50,45 50,55 50,65 40,65 40,75 30,75 30,65 20,65 20,75 20,85 20,95 20,105 20,115 30,115 40,115 50,115 60,115 60,105 
                    60,95 70,95 70,85 80,85 80,95 90,95 90,105 90,115 100,115 110,115 120,115 130,115 130,105 130,95 130,85 130,75 130,65 " fill="currentColor" />
                </svg>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </BackgroundImage>
  )
}
>>>>>>> feat/nav

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
