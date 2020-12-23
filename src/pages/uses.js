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
      text={`Tools and tech that I use regulary.`}
      img={data.usesImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
            <Row>
                <Col xl={{ span: 8, offset: 2 }}>
                  <p>
                    <a href="https://github.com/wesbos/awesome-uses" target="_blank" rel="noopener noreferrer">
                      <em>What is a “uses” page?</em>
                    </a>
                  </p>
                  <h3>Hardware</h3>
                  <ul>
                      <li>MacBook Air (M1, Late 2020)</li>
                      <li>
                        <a href="https://pcpartpicker.com/b/Hq9G3C" target="_blank" rel="noopener noreferrer">Custom-built PC</a>
                      </li>
                      <li>
                        <a href="https://drop.com/buy/drop-alt-mechanical-keyboard" target="_blank" rel="noopener noreferrer">Drop ALT Mechanical Keyboard</a>
                      </li>
                      [Massdrop x Sennheiser HD 58X Jubilee Headphones](https://drop.com/buy/massdrop-x-sennheiser-hd-58x-jubilee-headphones)
                      [AirPods Pro](https://www.apple.com/airpods-pro/)
                  </ul>
                  <h3>Software</h3>
                  <ul>
                      <li></li>
                  </ul>
[Terminal](https://support.apple.com/guide/terminal/welcome/mac) (Mac) / [Windows Terminal](https://github.com/microsoft/terminal) (PC)
- [Node.js](https://nodejs.org) / [NPM](https://www.npmjs.com)
- [Homebrew](https://brew.sh) (Mac)
- [Adobe Experience Manager 6.5](https://www.adobe.com/marketing/experience-manager.html)
- [Apache Maven](https://maven.apache.org)
- [OpenJDK](https://www.azul.com/downloads/zulu-community/?package=jdk) (Zulu build for macOS 11+ ARM 64-bit)
- Shell: [Oh My Zsh](https://ohmyz.sh)
- Font: [Cascadia Code PL](https://github.com/microsoft/cascadia-code)
- Zsh plugins: [powerlevel10k](https://github.com/romkatv/powerlevel10k), [shell completion](https://docs.brew.sh/Shell-Completion)

[Visual Studio Code](https://code.visualstudio.com)
- Font: [Cascadia Code PL](https://github.com/microsoft/cascadia-code)
- Theme: Abyss

Browsers
- Chrome for work-related browsing due to better plugins and tools
- Safari and Edge Chromium (Mac and PC respectively) for personal browsing

[Adobe Creative Cloud](https://www.adobe.com/creativecloud.html)
- Photoshop
- Illustrator
- Xd

## This Site
Packages and services used by burgbits.com
- Gatsby



            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default UsesPage
