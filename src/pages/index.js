import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Button, Col, Card, ButtonGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Dump from "../components/Dump"

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
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
            description
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
            <h2>Featured Project</h2>
            <Row>
              <Col>
                <img src="https://source.unsplash.com/KE0nC8-58MQ/660x360" alt={`placeholder`} />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-light" id="work">
        <Container>
          <h2 className="mb-4">Latest Posts</h2>
          {/* <Dump data={data} /> */}
          <Row>
            {data.allMdx.nodes.map(({ excerpt, frontmatter }, index) => {
              if (index == 0) return (
                <Col md={6} xl={4} className="mb-5">
                  <Card as="a" className="lift h-100" href="#!">
                    <Card.Img variant="top" src="https://source.unsplash.com/KE0nC8-58MQ/660x360" alt={frontmatter.title} />
                    <Card.Body>
                      <Card.Title>{frontmatter.title}</Card.Title>
                      <Card.Text>{frontmatter.description || excerpt}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      {frontmatter.date}
                    </Card.Footer>
                  </Card>
                </Col>
              )}
            )}
          </Row>
          <Row>
            {data.allMdx.nodes.map(({ excerpt, frontmatter }, index) => {
              if (0 < index && index < 4) return (
                <Col md={6} xl={4} className="mb-5">
                  <Card as="a" className="lift h-100" href="#!">
                    <Card.Img variant="top" src="https://source.unsplash.com/KE0nC8-58MQ/660x360" alt={frontmatter.title} />
                    <Card.Body>
                      <Card.Title>{frontmatter.title}</Card.Title>
                      <Card.Text>{frontmatter.description || excerpt}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      {frontmatter.date}
                    </Card.Footer>
                  </Card>
                </Col>
              )}
            )}
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
      </main>
    </Layout>
  )
}

export default IndexPage
