import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const NowPage = props => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "lizzy-and-lou-turn-5.jpeg" }) {
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
      text={["A snapshot of what’s currently happening in the ", <abbr title="not the Monty Python one">Life of Brian</abbr>,"."]}
      img={data.aboutImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <h2>What I’m doing now</h2>
              <p className="mb-4 h5">Last updated: March 20, 2021</p>
              <p>Happy Spring. Lizzy and Lou turned FIVE earlier this month! We have two five-year-olds. This is crazy. Time is flying by faster than ever.</p>
              <p>I've recently accepted a new position at the <a href="https://redcross.org" target="_blank" rel="noopener noreferrer">American Red Cross</a> as a web software engineer. It has been an honor and privilege to work alongside some of the most amazing colleagues one could ask for at Jefferson Health for the past eight years. This new position brings with it an exciting opportunity for me to grow as a developer, with a focus on the front end of the stack, still developing components for Adobe Experience Manager, and gaining additional responsibilities with much to learn on the back end.</p>
              <p>COVID-19 has certainly made things interesting. I'm fortunate to say that I've received both vaccination shots at this time. Since my wife is a nurse practitioner and her brother is a pharmacist, we can share each of our different perspectives from inside the industry. I give all the praise and credit in the world to those folks on the front lines of this terrible disease and this challenging time in history.</p>
              <p>Taking a proactive approach with my health and <Link to="/runs">running</Link> when I can, preparing for the 2021 Broad Street Run (10 miles), whether it is a virtual format again or hopefully in person, with a target goal of running a half marathon (13.1 miles) before my 40th birthday.</p>
              <p>Back to playing banjo with <a href="https://www.fralinger.org" target="_blank" rel="noopener noreferrer">Fralinger</a> and <a href="http://drewgent.com" target="_blank" rel="noopener noreferrer">Drew Nugent and the Midnight Society</a> as the live gigs are just starting to pick up again!</p>
              <p><Link to="/blog">Blogging</Link> as often as I can find time to form coherent thoughts about a topic of interest.</p>
              <p>Starting off strong with my 2021 <Link to="/reads">reading</Link> challenge goal of 21 books.</p>
              <p><Link to="/games">Playing video games</Link>, notably on PS5 and <Link to="/cutting-edge-of-retro-gaming">MiSTer</Link>. My tastes gravitate towards games from and inspired by the 8- and 16-bit “golden age” of pixel art. Kids can keep their Fortnite and Overwatch. Give me the “<abbr title="Nintendo Entertainment System">NES</abbr> Hard” platformers, run-and-guns, and <abbr title="role-playing games">RPGs</abbr>. I love to chat about <abbr title="cathode-ray tube">CRT</abbr> scan lines in 240p <abbr title="red-green-blue additive color model">RGB</abbr>, or the latest advances in <abbr title="field-programmable gate array">FPGA</abbr>-based systems with near-perfect accuracy and zero-to-low input latency.</p>
              <p>Ultimately trying to balance being a father, husband, son, web professional, musician, nerd, colleague, friend, and decent human being in the crazy world we currently live in.</p>
              <p>
                <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
                  <em>What is a “now” page?</em>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-0" xl={{ span: 8, offset: 2 }}>
              <a href="/Brian-Hamburg-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <svg style={{ paddingRight: 10, paddingBottom: 5, height: '1em' }} fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <path d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64
                      c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472
                      c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"/>
                  </g>
                  <g>
                    <path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"/>
                  </g>
                </svg>
                Download My Résumé
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default NowPage
