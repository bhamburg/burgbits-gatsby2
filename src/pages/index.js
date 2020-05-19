import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Jumbotron, Container, Row, Button, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "brian-hamburg-profile-photo-DICE2019.jpeg" }) {
        childImageSharp {
          sizes(quality: 100) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Brian Hamburg" />
      <section id="hero" className="bg-dark text-light">
        <Jumbotron fluid>
        <Container>
          <Row>
            <Col xs={{ span: 12 }} md={{ span: 4, order: 2 }} lg={{ span: 3 }} className="mb-5-sm">
              <Img fluid={data.profileImage.childImageSharp.sizes} className="circle-photo" />
            </Col>
            <Col xs={{ span: 12 }} md={{ order: 1 }}>
              <h1 className="bigtext">Hi, I&rsquo;m Brian</h1>
              <p className="h2">
                I&rsquo;m a web developer, designer, and musician in Philadephia, PA
              </p>
              <p className="text-muted h3">
                This is my portfolio of technical and creative work, 
                and musings on a variety of hobbies and interests
              </p>
            </Col>
          </Row>
          </Container>
        </Jumbotron>
      </section>
    </Layout>
  )
}

export default IndexPage
