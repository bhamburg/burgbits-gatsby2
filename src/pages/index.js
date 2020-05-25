import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Button, Col, Card, ButtonGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

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
      <SEO title="Welcome" />
      <Header 
        title="Hi, I'm Brian."
        subtitle="I’m a web developer, designer, and musician."
        text="This is my portfolio of technical and creative work, 
        as well as musings on a variety of hobbies and interests."
        img={data.profileImage.childImageSharp.sizes}
      />
      <main>
        <section className="bg-white" id="spotlight">
          <Container>
            <h2 className="mb-4">Latest Posts</h2>
            <Row>
              <Col md={3}>
                <Card className="mb-4 shadow-sm">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup>
                          <Button variant="outline-secondary" size="sm">View</Button>
                          <Button variant="outline-secondary" size="sm">Edit</Button>
                        </ButtonGroup>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="mb-4 shadow-sm">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup>
                          <Button variant="outline-secondary" size="sm">View</Button>
                          <Button variant="outline-secondary" size="sm">Edit</Button>
                        </ButtonGroup>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="mb-4 shadow-sm">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup>
                          <Button variant="outline-secondary" size="sm">View</Button>
                          <Button variant="outline-secondary" size="sm">Edit</Button>
                        </ButtonGroup>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Button className="display-1">
                  &rarr;
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-light" id="work">
          <Container>
            <h2>Work</h2>
            <Row>
              <Col>
              I am work.<br/>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{`<code>`}</Card.Title>
                  <Card.Text>
                    For example, <code>&lt;section&gt;</code> should be wrapped as inline.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="shadow-sm bg-dark">
                <Card.Body>
                  <pre className="text-light">
                    <code>
                      &lt;p&gt;Sample text here...&lt;/p&gt;
                      &lt;p&gt;And another line of sample text here...&lt;/p&gt;
                    </code>
                  </pre>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-warning" id="hobbies">
          <Container>
            <h2>Hobbies</h2>
            <Row>
              <Col>
                I am hobbies.
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-light" id="latest_posts">
          <Container>
            <h2>Latest Posts</h2>
            <Row>
              <Col>
                I am a post.
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
