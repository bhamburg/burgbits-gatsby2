import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"



const PlaysPage = props => {
  const data = useStaticQuery(graphql`
    query {
      usesImage: file(relativePath: { eq: "mister-zelda.jpeg" }) {
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
    <SEO title="Plays" />
    <Header 
      title="/plays"
      text={[<em>“Video games are bad for you? That’s what they said about rock and roll.”</em>,<br />,"—Shigeru Miyamoto"]}
      img={data.usesImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white" id="about">
        <Container>
            <Row>
                <Col xl={{ span: 8, offset: 2 }}>
                    <h3>Hardware</h3>
                    <ul>
                        <li></li>
                    </ul>
                    <h3>Software</h3>
                    <ul>
                        <li></li>
                    </ul>
## Gaming Consoles
FPGA 
- [MiSTer](https://github.com/MiSTer-devel/Main_MiSTer/wiki)
- Analogue Super Nt 
- Analogue Mega Sg

Sony Playstation
- PlayStation 5
- PlayStation 4 Pro
- PlayStation 3 (Slim)

Nintendo
- Nintendo Switch
- Wii U (Super Mario Maker Console Deluxe Set)
- Wii (25th Anniversary Red Limited Edition)
- Nintendo 64
- Super Nintendo Entertainment System
- Nintendo Entertainment System (Action Set)
- 3DS XL (Hyrule Edition)
- DS Lite (Polar White)
- Game Boy Advance (AGS-001, AGS-101)
- Game Boy Pocket
- Game Boy
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-0" xl={{ span: 8, offset: 2 }}>
              <a href="https://github.com/wesbos/awesome-uses" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">What is a “uses” page?</a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default PlaysPage
