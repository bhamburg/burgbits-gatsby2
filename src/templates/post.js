import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Container, Row, Button, Col, Card, ButtonGroup } from "react-bootstrap"

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
                    <MDXProvider components={shortcodes}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </MDXProvider>
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
      }
    }
  }
`