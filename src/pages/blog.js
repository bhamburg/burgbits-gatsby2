import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Card } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    query {
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
            thumbnail {
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
      <SEO title="Blog Posts" />
      <Header 
        title="/blog"
        text={["Brian’s ",<abbr title="I am indeed a fan of George Carlin">Brain Droppings</abbr>,"."]}
      />
      <main>
        <section className="bg-white" id="uses">
          <Container>
            <h2 className="mb-4 text-center">All Posts</h2>
            <Row>
              {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }, index) => {
                return (
                  <Col className="mb-5" md={6} xl={4} key={index}>
                    <Card as="a" className="lift h-100" href={fields.slug} title={`Blog Post: ${frontmatter.title}`}>
                        {frontmatter.thumbnail && <Img fluid={frontmatter.thumbnail.childImageSharp.sizes} className="fluid card-img-top" alt={frontmatter.title} />} 
                        {!frontmatter.thumbnail && frontmatter.featuredImage && <Img fluid={frontmatter.featuredImage.childImageSharp.sizes} className="fluid card-img-top" alt={frontmatter.title} />} 
                        {!frontmatter.thumbnail && !frontmatter.featuredImage && <Card.Img variant="top" src="https://source.unsplash.com/KE0nC8-58MQ/660x360" alt={frontmatter.title} />}
                      <Card.Body>
                        <h3 className="card-title text-center">{frontmatter.title}</h3>
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
          </Container>
        </section>
      </main>
    </Layout>
  )
}

export default BlogPage
