import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const MusicPage = props => {
  const data = useStaticQuery(graphql`
    query {
      usesImage: file(relativePath: { eq: "mister-zelda.jpeg" }) {
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
    <SEO title="Music" />
    <Header 
      title="/music"
      text={[<em>“Without music to decorate it, time is just a bunch of boring production deadlines or dates by which bills must be paid.”</em>,<br />,"—Frank Zappa"]}
      img={data.usesImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <h3>Currently Reading</h3>
              <h3>Books Read</h3>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default MusicPage
