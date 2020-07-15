import React from "react"
import { Link } from "gatsby"
import { Container, Row, Button, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const BlogPage = props => (
  <Layout>
    <SEO title="Blog Posts" />
    <Header 
      title="Blog Posts"
      text="Brian’s brain droppings."
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

export default BlogPage
