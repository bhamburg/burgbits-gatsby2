import React from "react"
import { Link } from "gatsby"
import { Container, Row, Button, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const NotFoundPage = props => (
  <Layout>
    <SEO title="404 Page Not Found" />
    <Header 
      title="Page Not Found"
      text="Not all who wander are lost, but you are."
    />
    <main>
      <section className="bg-white" id="uses">
        <Container>
          <Row>
            Posts go here.
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)

export default NotFoundPage
