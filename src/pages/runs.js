import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Table } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const RunsPage = props => {
  const data = useStaticQuery(graphql`
    query {
      runsImage: file(relativePath: { eq: "running-summer.jpg" }) {
        childImageSharp {
          sizes(quality: 100) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
      allGoogleRunsSheet {
        nodes {
          distance
          date
          name
          paceCalculated
          time
        }
      }
    }
  `)
  return (
  <Layout>
    <SEO title="Runs" />
    <Header 
      title="/runs"
      text={[<em>“But when I run, the world grows quiet. Demons are forgotten, Krakens are slain, and Blerches are silenced.”</em>,<br />,"—The Oatmeal"]}
      img={data.runsImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
          <Row>
            <Col xl={{ span: 10, offset: 1 }}>
              <h2>Official Races</h2>
                <Table>
                  <thead>
                    <tr>
                      <th>Race</th>
                      <th>Date</th>
                      <th>Distance</th>
                      <th className="text-right">Time</th>
                      <th className="text-right">Pace (per mile)</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.allGoogleRunsSheet.nodes.map(({ distance, date, name, paceCalculated, time }, index) => {
                    return (
                      <tr key={index}>
                        <td>{name}</td>
                        <td>{date}</td>
                        <td>{distance}</td>
                        <td className="text-right">{time}</td>
                        <td className="text-right">{paceCalculated}</td>
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

export default RunsPage
