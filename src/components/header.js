import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import { Jumbotron, Container, Row, Col } from "react-bootstrap"

const Header = ({ title, subtitle, text, date, category, img }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "sunset-fishtown.jpg" }) {
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
            {img && <Col xs={{ span: 12 }} md={{ span: 4, order: 2 }} lg={{ span: 3 }} className="mb-4 mb-md-0">
              <Img fluid={img} className="circle-photo" />
            </Col>}
            <Col xs={{ span: 12 }} md={{ order: 1 }} className={`d-flex flex-column justify-content-center ${img ? "" : "text-center"}`}>
              <h1 className="bigtext">{title}</h1>
              <p className="h2">{subtitle}</p>
              {text && <p className="text-muted h3">
                {text}
              </p>}
              {date && <p className="text-muted h3">
                <span className="d-none d-sm-inline">Posted on </span>{date}
                {category && <span> under {category}</span>}
              </p>}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </BackgroundImage>
  )
}

export default Header
