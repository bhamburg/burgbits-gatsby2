// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const SecondPage = props => (
  <Layout>
    <SEO title="Uses" />
    <Header 
      title="Uses"
      subtitle="These are things that I use."
    />
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link> 
  </Layout>
)

export default SecondPage
