import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Table, Tabs, Tab  } from "react-bootstrap"
import dayjs from "dayjs"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const ReadsPage = props => {
  const [yearSelected, setYearSelected] = useState(2021)
  const years = [2021,2020,2019]

  const data = useStaticQuery(graphql`
    query {
      readsImage: file(relativePath: { eq: "focus-on-the-process.jpg" }) {
        childImageSharp {
          sizes(quality: 100) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
      allGoogleReadsSheet (sort: {order: ASC, fields: authorLastFirst}) {
        nodes {
          author
          authorLastFirst
          addAuthors
          dateRead
          title
        }
      }
    }
  `)
  return (
  <Layout>
    <SEO title="Books I'm Reading" />
    <Header 
      title="/reads"
      text={[<em>“The man who does not read good books is no better than the man who can’t.”</em>,<br />,"—Mark Twain"]}
      img={data.readsImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white">
        <Container>
          <Row>
            <Col xl={{ span: 10, offset: 1 }}>
              <h2 className="mb-4">Currently Reading</h2>
              <Table responsive="sm">
                  <thead>
                    <tr>
                      <th style={{ width: '65%' }}>Title</th>
                      <th>Author(s)</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.allGoogleReadsSheet.nodes.map(({ 
                    author,
                    addAuthors,
                    dateRead,
                    title
                  }, index) => {
                    return !dateRead && (
                      <tr key={index}>
                        <td>{title}</td>
                        <td>{author}{addAuthors && (<>,<br/>{addAuthors}</>)}</td>
                      </tr>
                    )
                  })}
                  </tbody>
                </Table>
              <h2 className="mt-4">Books Read</h2>
              <p className="mb-4 h5">Sorted by Year Finished, then Author</p>
              <Tabs
                id="books-read"
                activeKey={yearSelected}
                onSelect={(k) => setYearSelected(k)}
              >
                {years.map((year, index) => {
                  return (
                    <Tab key={year} eventKey={year} title={year}>
                      <Table responsive="sm">
                        <thead>
                          <tr>
                            <th style={{ width: '65%' }}>Title</th>
                            <th>Author(s)</th>
                            <th className="text-right" width="135">Date Finished</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.allGoogleReadsSheet.nodes.map(({ 
                            author,
                            addAuthors,
                            dateRead,
                            title
                          }, index) => {
                            return dateRead 
                            && dateRead.includes(year)
                            && (
                              <tr key={index}>
                                <td>{title}</td>
                                <td>{author}{addAuthors && (<>,<br/>{addAuthors}</>)}</td>
                                <td className="text-right">{dayjs(dateRead).format('MMM D, YYYY')}</td>
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
                          <th style={{ width: '65%' }}>Title</th>
                          <th>Author(s)</th>
                          <th className="text-right" width="135">Date Finished</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.allGoogleReadsSheet.nodes.map(({ 
                          author,
                          addAuthors,
                          dateRead,
                          title
                        }, index) => {
                          return dateRead 
                          // find all dates earlier than last year in tab array
                          && parseInt(dateRead.split(", ")[0]) < years[years.length - 1]
                          && (
                            <tr key={index}>
                              <td>{title}</td>
                              <td>{author}{addAuthors && (<>,<br/>{addAuthors}</>)}</td>
                              <td className="text-right" >{dayjs(dateRead).format('MMM D, YYYY')}</td>
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

export default ReadsPage
