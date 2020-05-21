import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Button, Col, Card, ButtonGroup } from "react-bootstrap"

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
      <SEO title="Welcome" />
      <section id="hero" className="bg-dark text-light">
        <Container>
          <Row>
            <Col xs={{ span: 12 }} md={{ span: 4, order: 2 }} lg={{ span: 3 }} className="mb-4 mb-md-0">
              <Img fluid={data.profileImage.childImageSharp.sizes} className="circle-photo" />
            </Col>
            <Col xs={{ span: 12 }} md={{ order: 1 }}>
              <h1 className="bigtext">Hi, I’m Brian.</h1>
              <p className="h2">
                I’m a web developer, designer, and musician in Philadephia, PA.
              </p>
              <p className="text-muted h4">
                This is my portfolio of technical and creative work, 
                as well as musings on a variety of hobbies and interests.{` `}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="1em">
                  <polygon points="120,65 120,75 110,75 110,65 100,65 100,55 100,45 100,35 90,35 90,45 80,45 80,35 70,35 70,45 60,45 
                    60,35 50,35 50,45 50,55 50,65 40,65 40,75 30,75 30,65 20,65 20,75 20,85 20,95 20,105 20,115 30,115 40,115 50,115 60,115 60,105 
                    60,95 70,95 70,85 80,85 80,95 90,95 90,105 90,115 100,115 110,115 120,115 130,115 130,105 130,95 130,85 130,75 130,65 " fill="currentColor" />
                </svg>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
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
    </Layout>
  )
}

export default IndexPage
