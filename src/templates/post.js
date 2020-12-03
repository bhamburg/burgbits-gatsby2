import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Container, Row, Col} from "react-bootstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const shortcodes = { Link } // Provide common components here
export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
        <SEO title={mdx.frontmatter.title} />
        <Header 
            title={mdx.frontmatter.title} 
            date={mdx.frontmatter.date}
        />
        <main>
            <section className="bg-white" id="post-body">
                <Container>
                  <Row>
                    <Col xl={{ span: 6, offset: 3 }} className="mb-4">
                      <figure className="figure" style={{ width: '100%' }}>
                        {mdx.frontmatter.featuredImage && <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.sizes} className="figure-img img-fluid rounded" alt={mdx.frontmatter.caption} />}
                        {mdx.frontmatter.caption && <figcaption className="figure-caption">{mdx.frontmatter.caption}</figcaption>}
                      </figure>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={{ span: 8, offset: 2 }}>
                      <MDXProvider components={shortcodes}>
                          <MDXRenderer>{mdx.body}</MDXRenderer>
                      </MDXProvider>
                    </Col>
                  </Row>
                </Container>
            </section>
        </main>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "dddd, MMMM D, YYYY")
        description
        caption
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
    }
  }
`