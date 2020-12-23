import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Table } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const GamingPage = props => {
  const data = useStaticQuery(graphql`
    query {
      usesImage: file(relativePath: { eq: "mister-zelda.jpeg" }) {
        childImageSharp {
          sizes(quality: 100) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
      allGoogleGamesSheet {
        nodes {
          dateFinished
          notes
          platform
          title
        }
      }
    }
  `)
  return (
  <Layout>
    <SEO title="Gaming" />
    <Header 
      title="/gaming"
      text={[<em>“Video games are bad for you? That’s what they said about rock and roll.”</em>,<br />,"—Shigeru Miyamoto"]}
      img={data.usesImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
          <Row>
            <Col xl={{ span: 10, offset: 1 }}>
              <h2 className="mb-4">Currently Playing</h2>
              <Table hover>
                <thead>
                  <tr>
                    <th width="40%">Title</th>
                    <th className="text-center">Platform</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                {data.allGoogleGamesSheet.nodes.map(({ dateFinished, notes, platform, title}, index) => {
                  return !dateFinished && (
                    <tr>
                      <td>{title}</td>
                      <td>{platform}</td>
                      <td>{notes}</td>
                    </tr>
                  )
                })}
                </tbody>
              </Table>
              <h2 className="mt-4 mb-4">Games Finished in 2020</h2>
              <Table hover>
                <thead>
                  <tr>
                    <th width="40%">Title</th>
                    <th>Platform</th>
                    <th className="text-right">Date</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                {data.allGoogleGamesSheet.nodes.map(({ dateFinished, notes, platform, title}, index) => {
                  return dateFinished && dateFinished.includes('2020') && (
                    <tr>
                      <td>{title}</td>
                      <td>{platform}</td>
                      <td className="text-right">{dateFinished}</td>
                      <td>{notes}</td>
                    </tr>
                  )
                })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default GamingPage
