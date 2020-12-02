import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Button, Col, Card } from "react-bootstrap"

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
      lovePhila: file(relativePath: { eq: "love-phila.jpg" }) {
        childImageSharp {
          sizes(quality: 100) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
      shades: file(relativePath: { eq: "with-fralinger-shades.jpg" }) {
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
            featuredImage {
              childImageSharp {
                sizes(quality: 100) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
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
      <SEO />
      <Header 
        title="Hi, I’m Brian."
        subtitle="I’m a web developer, designer, and musician."
        text="This is my portfolio of technical and creative work, 
        as well as musings on a variety of hobbies and interests."
        img={data.profileImage.childImageSharp.sizes}
      />
      <main>
        <section className="bg-white" id="about">
          <Container>
            <Row>
              <Col xs={6} lg={3}>
                <Link to="/about">
                  <Img fluid={data.lovePhila.childImageSharp.sizes} className="fluid rounded" />
                </Link>
              </Col>
              <Col xs={6} lg={3}>
                <Link to="/about">
                  <Img fluid={data.shades.childImageSharp.sizes} className="fluid rounded" />
                </Link>
              </Col>
              <Col>
                <h2>
                  Who is this Hamburg character anyway?
                </h2>
                <p>
                  <i>Father of twins. Strummer of strings. Wrangler of the Web. Implementer of interfaces. Purveyor of pixels.</i>
                </p>
                <p>
                  This is just the tip of the Brian Hamburg iceberg.
                </p>
                <Link to="/about" className="btn btn-dark btn-lg">
                  {`Read More =>`}
                </Link>
              </Col>
            </Row>
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
        <section className="bg-light" id="recently-written">
          <Container>
            <h2 className="mb-5">Latest Posts</h2>
            <Row className="mb-5">
              {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }, index) => {
                return index === 0 && (
                  <Col xl={{ span: 10, offset: 1 }} key={index}>
                    <Card as="a" className="lift featured-post" href={fields.slug} title={`Blog Post: ${frontmatter.title}`}>
                      {frontmatter.featuredImage && <Img fluid={frontmatter.featuredImage.childImageSharp.sizes} className="fluid card-img-top" alt={frontmatter.title} /> }
                      {!frontmatter.featuredImage &&  <Card.Img variant="top" src="https://source.unsplash.com/KE0nC8-58MQ/660x360" alt={frontmatter.title} />}
                      <Card.Body>
                        <h3 className="card-title">
                          {frontmatter.title}
                        </h3>
                        <Card.Text>
                          {frontmatter.description || excerpt}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg> 
                        <span className="ml-3">{frontmatter.date}</span>
                      </Card.Footer>
                    </Card>
                  </Col>
                )
              })}
            </Row>
            <Row>
              {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }, index) => {
                return (0 < index && index < 4) && (
                  <Col md={6} xl={4} key={index}>
                    <Card as="a" className="lift h-100" href={fields.slug} title={`Blog Post: ${frontmatter.title}`}>
                      {frontmatter.featuredImage && <Img fluid={frontmatter.featuredImage.childImageSharp.sizes} className="fluid rounded card-img-top" alt={frontmatter.title} />}
                      {!frontmatter.featuredImage && <Card.Img variant="top" src="https://source.unsplash.com/KE0nC8-58MQ/660x360" alt={frontmatter.title} />}
                      <Card.Body>
                        <h3 className="card-title">{frontmatter.title}</h3>
                        <Card.Text>{frontmatter.description || excerpt}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg> 
                        <span className="ml-3">{frontmatter.date}</span>
                      </Card.Footer>
                    </Card>
                  </Col>
                )}
              )}
            </Row>
            <div className="text-center mt-5">
              <Link to="/blog" className="btn btn-dark btn-lg">
                {`More Posts =>`}
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
