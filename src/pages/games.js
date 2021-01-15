import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const GamesPage = props => {
  const [yearSelected, setYearSelected] = useState(2021)
  const years = [2021,2020,2019]

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
          completed
          dateFinished
          platform
          title
          firstTime
          notes
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
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th width="125px">Platform</th>
                    <th className="d-none d-sm-table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                {data.allGoogleGamesSheet.nodes.map(({ 
                  dateFinished, 
                  notes, 
                  platform, 
                  title,
                }, index) => {
                  return !dateFinished && (
                    <tr key={index}>
                      <td>{title}</td>
                      <td>{platform}</td>
                      <td className="d-none d-sm-table-cell">{notes}</td>
                    </tr>
                  )
                })}
                </tbody>
              </Table>
              <h2 className="mt-4">Games Finished</h2>
              <p className="font-weight-bold">
                <span 
                  role="img" 
                  aria-label="First Playthrough" 
                  title="First Playthrough"
                >✅</span> First Playthrough
                <span 
                  className="ml-3"
                  role="img" 
                  aria-label="100% Completed" 
                  title="100% Completed"
                >💯</span> Completed
              </p>
              <Tabs
                id="finished-games"
                activeKey={yearSelected}
                onSelect={(k) => setYearSelected(k)}
              >
                {years.map((year, index) => {
                  return (
                    <Tab key={year} eventKey={year} title={year}>
                      <Table responsive="sm">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th width="125px">Platform</th>
                            <th className="text-center">
                              <span 
                                role="img" 
                                aria-label="First Playthrough" 
                                title="First Playthrough"
                              >✅</span>
                            </th>
                            <th className="text-center">
                              <span 
                                role="img" 
                                aria-label="100% Completed" 
                                title="100% Completed"
                              >💯</span>
                            </th>
                            <th className="text-right" width="135">Date Finished</th>
                            <th className="d-none d-sm-table-cell">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.allGoogleGamesSheet.nodes.map(({ 
                          completed,
                          dateFinished,
                          platform,
                          title,
                          firstTime,
                          notes
                        }, index) => {
                          return dateFinished 
                          && dateFinished.includes(year) 
                          && (
                            <tr key={index}>
                              <td>{title}</td>
                              <td>{platform}</td>
                              <td className="text-center">
                                {firstTime && <span role="img" aria-label="First Playthrough" title="First Playthrough">✅</span>}
                              </td>
                              <td className="text-center">
                                {completed && <span role="img" aria-label="100% Completion" title="100% Completion">💯</span>}
                              </td>
                              <td className="text-right">{dateFinished}</td>
                              <td className="d-none d-sm-table-cell">{notes}</td>
                            </tr>
                          )
                        })}
                        </tbody>
                      </Table>
                    </Tab>
                  )
                })}
                <Tab eventKey="Earlier" title="Earlier">
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th width="125px">Platform</th>
                          <th className="text-center">
                            <span 
                              role="img" 
                              aria-label="First Playthrough" 
                              title="First Playthrough"
                            >✅</span>
                          </th>
                          <th className="text-center">
                            <span 
                              role="img" 
                              aria-label="100% Completed" 
                              title="100% Completed"
                            >💯</span>
                          </th>
                          <th className="text-right" width="135">Date Finished</th>
                          <th className="d-none d-sm-table-cell">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.allGoogleGamesSheet.nodes.map(({ 
                          completed,
                          dateFinished,
                          platform,
                          title,
                          firstTime,
                          notes
                        }, index) => {
                          return dateFinished
                          // find all dates earlier than last year in tab array
                          && parseInt(dateFinished.split(", ")[1]) < years[years.length - 1]
                          && (
                            <tr key={index}>
                              <td>{title}</td>
                              <td>{platform}</td>
                              <td className="text-center">
                                {firstTime && <span role="img" aria-label="First Playthrough" title="First Playthrough">✅</span>}
                              </td>
                              <td className="text-center">
                                {completed && <span role="img" aria-label="100% Completion" title="100% Completion">💯</span>}
                              </td>
                              <td className="text-right">{dateFinished}</td>
                              <td className="d-none d-sm-table-cell">{notes}</td>
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
