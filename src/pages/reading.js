import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const ReadingPage = props => {
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
    <SEO title="Reading" />
    <Header 
      title="/reading"
      text={[<em>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</em>,<br />,"—Dr. Seuss"]}
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

export default ReadingPage
