import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Button, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const WorkPage = props => {
  const data = useStaticQuery(graphql`
    query {
      workImage: file(relativePath: { eq: "work-at-dice.jpg" }) {
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
    <SEO title="Work" />
    <Header 
      title="Work"
      text="A small sample of my recent projects and my résumé."
      img={data.workImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white" id="uses">
        <Container>
          <Row>
            Work goes here.
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default WorkPage
