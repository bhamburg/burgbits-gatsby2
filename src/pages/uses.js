import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const UsesPage = props => {
  const data = useStaticQuery(graphql`
    query {
      usesImage: file(relativePath: { eq: "desk.png" }) {
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
    <SEO title="Uses" />
    <Header 
      title="/uses"
      text={`Tools and tech that I use regularly.`}
      img={data.usesImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <h3>Hardware</h3>
              <ul>
                <li>MacBook Air (M1, Late 2020)</li>
                <li><a href="https://pcpartpicker.com/b/Hq9G3C" target="_blank" rel="noopener noreferrer">Custom-built PC</a></li>
                <li>Drop ALT Mechanical Keyboard</li>
                <li>Massdrop x Sennheiser HD 58X Jubilee Headphones</li>
                <li>AirPods Pro</li>
              </ul>
              <h3>Software</h3>
              <ul>
                <li>Node.js / NPM / Yarn</li>
                <li>Homebrew (Mac)</li>
                <li>
                  Visual Studio Code
                  <ul>
                    <li>Font: Cascadia Code</li>
                    <li>Theme: Abyss</li>
                  </ul>
                </li>
                <li>
                  iTerm2 (Mac) / Windows Terminal (PC)
                  <ul>
                    <li>Font: Cascadia Code PL</li>
                    <li>Shell: Oh My Zsh (powerlevel10k, shell completion)</li>
                  </ul>
                </li>
                <li>Adobe Experience Manager 6.5 / Apache Maven / OpenJDK</li>
                <li>Adobe Creative Suite (Photoshop, Illustrator)</li>
                <li>Chrome for work-related browsing due to better plugins and tools</li>
                <li>Safari and Edge Chromium (Mac and PC respectively) for personal browsing</li>
                <li>MuseScore 3 (music composition)</li>
              </ul>
              <h3>This Site</h3>
              <ul>
                <li>Gatsby / React / GraphQL</li>
                <li>React Bootstrap v1.4.0 (Bootstrap 4.5)</li>
                <li>Google Sheets API v4</li>
                <li>Netlify / Gatsby Cloud / GitHub</li>
              </ul>
              <p>
                <a href="https://github.com/wesbos/awesome-uses" target="_blank" rel="noopener noreferrer">
                  <em>What is a “uses” page?</em>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default UsesPage
