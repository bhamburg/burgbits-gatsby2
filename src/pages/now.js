import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"



const NowPage = props => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "Hamburg-family-beach.jpg" }) {
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
    <SEO title="Now" />
    <Header 
      title="/now"
      text={["A snapshot of what’s going on in the ", <abbr title="not the Monty Python one">Life of Brian</abbr>,"."]}
      img={data.aboutImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white" id="about">
        <Container>
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <h2>What I’m doing now</h2>
              <p className="mb-4 h5">Last updated: December 19, 2020</p>
              <p>Working from home for <a href="https://jeffersomnhealth.org" target="_blank" rel="noopener noreferrer">Jefferson Health</a> on a different web projects. COVID-19 has certainly made things interesting in the healthcare industry. Since my wife is a nurse practitioner and her brother is a pharmacist, we can share each of our different perspectives from inside the industry. I give all the praise and credit in the world to those folks on the front lines of this terrible disease and this challenging time in world history. 😷🙏</p>
              <p>Staying fresh with modern front-end web technologies and Adobe Experience Manager. 💻</p>
              <p><Link to="/blog">Blogging</Link> as often as I can remember to.</p>
              <p>Running when I can, preparing for the 2021 <a href="https://www.broadstreetrun.com" target="_blank" rel="noopener noreferrer">Broad Street Run</a> (10 miles), with a target goal of a half marathon (13.1 miles) before my 40th birthday. 🏃‍♂️</p>
              <p>Missing "Mumseason" with <a href="https://www.fralinger.org" target="_blank" rel="noopener noreferrer">Fralinger</a> and admittedly not practicing music enough. I'll eventually get back into the swing of things, but the lack of in-person events to prepare for has made it tough to stay motivated. 🪕</p>
              <p>Rooting for the Eagles 🏈, Sixers 🏀, Flyers 🏒, and hoping for some drastic changes for the Phillies ⚾️ in the offseason. 2008 feels like forever ago. 🏆</p>
              <p>Trying to reach my pleged <Link to="/reads">reading</Link> challenge goal for 2020 but likely falling short. 📚</p>
              <p><Link to="/plays">Playing video games</Link>, notably on PS5 and <Link to="/cutting-edge-of-retro-gaming">MiSTer</Link>. 🕹</p>
              <p><strike>Watching</strike> Just finished and can't stop talking about season 2 of <a href="https://disneyplusoriginals.disney.com/show/the-mandalorian" target="_blank" rel="noopener noreferrer"><i>The Mandalorian</i></a>. 🤓</p>
              <p>Ultimately trying to balance being a father, husband, son, web professional, musician, nerd, colleague, friend, and decent human being in the crazy world we currently live in. 🌎</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-0" xl={{ span: 8, offset: 2 }}>
              <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">What is a “now” page?</a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default NowPage
