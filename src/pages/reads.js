import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const ReadsPage = props => {
  const data = useStaticQuery(graphql`
    query {
      readsImage: file(relativePath: { eq: "focus-on-the-process.jpg" }) {
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
    <SEO title="Reads" />
    <Header 
      title="/reads"
      text={[<em>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</em>,<br />,"—Dr. Seuss"]}
      img={data.readsImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
          <Row>
            <Col xl={{ span: 10, offset: 1 }}>
              <h2 className="mb-4">Currently Reading</h2>

              <h2 className="mt-4 mb-4">Books Read</h2>

            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default ReadsPage
