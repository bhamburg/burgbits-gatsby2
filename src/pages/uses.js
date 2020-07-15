import React from "react"
import { Link } from "gatsby"
import { Container, Row, Button, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const UsesPage = props => (
  <Layout>
    <SEO title="/uses" />
    <Header 
      title="/uses"
      text="Tools and tech that I use."
    />
    <main>
      <section className="bg-white" id="uses">
        <Container>
          <Row>
            Uses
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)

export default UsesPage
