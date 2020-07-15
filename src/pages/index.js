import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Button, Col, Card, ButtonGroup } from "react-bootstrap"
import { format } from "date-fns"

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
            date(formatString: "MMMM D, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Welcome" />
      <Header 
        title="Hi, I’m Brian."
        subtitle="I’m a web developer, designer, and musician."
        text="This is my portfolio of technical and creative work, 
        as well as musings on a variety of hobbies and interests."
        img={data.profileImage.childImageSharp.sizes}
      />
      <main>
        <section className="bg-white" id="featured-post">
          <Container>
            <Row>
              {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }, index) => {
                if (index == 0) return (
                  <Col md={{ span: 10, offset: 1 }}>
                    <Card as="a" className="lift featured-post" href={fields.slug}>
                      <Card.Img variant="top" src="https://source.unsplash.com/KE0nC8-58MQ/660x360" alt={frontmatter.title} />
                      <Card.Body>
                        <h3 className="card-title">{frontmatter.title}</h3>
                        <Card.Text>{frontmatter.description || excerpt}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted d-flex justify-content-center align-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg> 
                        <span className="ml-2">{frontmatter.date}</span>
                      </Card.Footer>
                    </Card>
                  </Col>
                )}
              )}
            </Row>
          </Container>
        </section>
        <section className="bg-light" id="recently-written">
          <Container>
            <Row>
              {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }, index) => {
                if (0 < index && index < 4) return (
                  <Col md={6} xl={4} key={index}>
                    <Card as="a" className="lift h-100" href={fields.slug}>
                      <Card.Img variant="top" src="https://source.unsplash.com/KE0nC8-58MQ/660x360" alt={frontmatter.title} />
                      <Card.Body>
                        <h3 className="card-title">{frontmatter.title}</h3>
                        <Card.Text>{frontmatter.description || excerpt}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted d-flex justify-content-center align-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg> 
                        <span className="ml-2">{frontmatter.date}</span>
                      </Card.Footer>
                    </Card>
                  </Col>
                )}
              )}
            </Row>
            <div className="text-center mt-5">
              <Link to="/blog/" className="btn btn-secondary btn-lg">
                Read More =>
              </Link>
            </div>
          </Container>
        </section>
        <section className="bg-secondary text-white" id="project">
          <Container>
            <h2>Featured Project</h2>
            <Row>
              <Col>
                Some cool thing
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-white" id="about">
          <Container>
            <h2>About Brian</h2>
            <Row>
              <Col>
                About Brian
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
