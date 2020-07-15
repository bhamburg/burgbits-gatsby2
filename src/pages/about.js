import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Button, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const AboutPage = props => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "Hamburg-family-beach.jpg" }) {
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
    <SEO title="About" />
    <Header 
      title="About"
      text="Father of twins. Strummer of strings. Wrangler of the Web. Implementer of interfaces. Purveyor of pixels."
      img={data.aboutImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white" id="uses">
        <Container>
          <Row>
            About goes here.
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default AboutPage
