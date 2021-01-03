import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const GamesPage = props => {
  const [yearSelected, setYearSelected] = useState(2020)
  const years = [2020,2019,2018]

  const data = useStaticQuery(graphql`
    query {
      gamingImage: file(relativePath: { eq: "mister-zelda.jpeg" }) {
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
    <SEO title="Games I'm Playing" />
    <Header 
      title="/games"
      text={[<em>“Video games are bad for you? That’s what they said about rock and roll.”</em>,<br />,"—Shigeru Miyamoto"]}
      img={data.gamingImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
          <Row>
            <Col xl={{ span: 10, offset: 1 }}>
              <h2 className="mb-4">Currently Playing</h2>
              <Table className="table-responsive-sm">
                <thead>
                  <tr>
                    <th width="55%">Title</th>
                    <th width="125px">Platform</th>
                  </tr>
                </thead>
                <tbody>
                {data.allGoogleGamesSheet.nodes.map(({ 
                  dateFinished, 
                  notes, 
                  platform, 
                  title
                }, index) => {
                  return !dateFinished && (
                    <tr key={index}>
                      <td>{title}</td>
                      <td>{platform}</td>
                    </tr>
                  )
                })}
                </tbody>
              </Table>
              <h2 className="mt-4">Games Finished</h2>
              <Tabs
                id="finished-games"
                activeKey={yearSelected}
                onSelect={(k) => setYearSelected(k)}
              >
                {years.map((year, index) => {
                  return (
                    <Tab key={year} eventKey={year} title={year}>
                      <Table className="table-responsive-sm">
                        <thead>
                          <tr>
                            <th width="55%">Title</th>
                            <th width="125px">Platform</th>
                            <th className="text-right" style={{ width: 140 }}>Date Finished</th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.allGoogleGamesSheet.nodes.map(({ dateFinished, notes, platform, title}, index) => {
                          return dateFinished 
                          && dateFinished.includes(year) 
                          && (
                            <tr key={index}>
                              <td>{title}</td>
                              <td>{platform}</td>
                              <td className="text-right">{dateFinished}</td>
                            </tr>
                          )
                        })}
                        </tbody>
                      </Table>
                    </Tab>
                  )
                })}
                <Tab eventKey="Earlier" title="Earlier">
                    <Table className="table-responsive-sm">
                      <thead>
                        <tr>
                          <th style={{ width: '55%' }}>Title</th>
                          <th>Author(s)</th>
                          <th className="text-right" width="135">Date Finished</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.allGoogleGamesSheet.nodes.map(({ 
                          dateFinished, 
                          notes, 
                          platform, 
                          title
                        }, index) => {
                          return dateFinished
                          // find all dates earlier than last year in tab array
                          && parseInt(dateFinished.split(", ")[1]) < years[years.length - 1]
                          && (
                            <tr key={index}>
                              <td>{title}</td>
                              <td>{platform}</td>
                              <td className="text-right">{dateFinished}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>
                  </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default GamesPage
