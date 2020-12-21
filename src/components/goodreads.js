import React, { useState, useEffect } from "react";
import axios from "axios";
import convert from "xml-js";
import { Row, Col } from "react-bootstrap"
import moment from "moment"

const PROXY = "https://cors-anywhere.herokuapp.com/";
const APIKEY = "WtRxj0qGSLZH6RXaR3BRg";

function Goodreads() {

  const [error, setError] = useState(false)
  const [curReading, setCurReading] = useState([])
  const [read, setRead] = useState([])
  const [curReadLoading, setCurReadLoading] = useState(false)
  const [readLoading, setReadLoading] = useState(false)

  useEffect(() => {
    setCurReadLoading(true)
    axios
      .get(`${PROXY}https://www.goodreads.com/review/list/4284038.xml?key=${APIKEY}&v=2&shelf=currently-reading`)
      .then((res) => {
        let xml = res.data
        let parsedJSON = JSON.parse(convert.xml2json(xml))
        let books = parsedJSON.elements[0].elements[2].elements
        setCurReadLoading(false)
        setCurReading(books)
      })
      .catch(error => {
        setCurReadLoading(false)
        setError(error)
        console.log(error)
      })
    setReadLoading(true)
    axios
      .get(`${PROXY}https://www.goodreads.com/review/list/4284038.xml?key=${APIKEY}&v=2&shelf=read`)
      .then((res) => {
        let xml = res.data
        let parsedJSON = JSON.parse(convert.xml2json(xml))
        let books = parsedJSON.elements[0].elements[2].elements
        setReadLoading(false)
        console.dir(books)
        setRead(books)
      })
      .catch(error => {
        setReadLoading(false)
        setError(error)
        console.log(error)
      })
  },[])

  return (
      <>
        <Row>
            <Col>
                <h2 className="mb-4 text-center">Reading List</h2>
            </Col>
        </Row>
        <Row>
            {!error ? <>
                {readLoading && 
                    <Col className="loader text-center align-items-center mb-4">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45"/>
                        </svg>
                    </Col>
                }
                {!curReadLoading && !readLoading && (
                <>
                    {curReading.map((book, i) => {
                        let title = book.elements[1].elements[5].elements[0]['text']
                        let url = book.elements[1].elements[10].elements[0]['text']
                        let imageUrl = book.elements[1].elements[7].elements[0]['text'] 
                        let authors = book.elements[1].elements[21].elements[0].elements[1].elements[0]['text']
                        return (   
                            <Col key={i} xs={3} md={2} xl={1} className="book">
                                <span>
                                    Currently<br />Reading
                                </span>
                                <img src={imageUrl}
                                    style={{
                                        cursor: 'pointer',
                                        width: '100%'
                                    }}
                                    className="lift"
                                    alt={`${title} by ${authors}`}
                                    title={`Currently reading - ${title} by ${authors}`}
                                    onClick={() => window.open(url)}
                                />
                            </Col>
                        )
                    })}
                    {read.map((book, i) => {
                        let title = book.elements[1].elements[5].elements[0]['text']
                        let url = book.elements[1].elements[10].elements[0]['text']
                        let imageUrl = book.elements[1].elements[7].elements[0]['text'] 
                        let authors = book.elements[1].elements[21].elements[0].elements[1].elements[0]['text']
                        let dateRead = book.elements[10].elements ? moment(book.elements[10].elements[0]['text']).format("MMM YYYY") : moment(book.elements[12].elements[0]['text']).format("MMM YYYY") 
                        return (  
                            <Col key={i} xs={3} md={2} xl={1} className="book">
                                <span>
                                    Finished<br />{dateRead && <>{dateRead}</>}
                                </span>
                                <img
                                    className="lift"
                                    src={imageUrl}
                                    alt={`${title} by ${authors}`}
                                    onClick={() => window.open(url)}
                                    style={{
                                        cursor: 'pointer',
                                        width: '100%'
                                    }}
                                    title={`${title} by ${authors}`}
                                />
                            </Col>
                        )
                    })}
                </>
            )}
        </>
        : <Col>
                <p>Error loading reading list!</p>
            </Col>
        }
        </Row>
        <Row>
            <Col className="text-center">
                <a href="https://www.goodreads.com/user/show/4284038-brian-hamburg" target="_blank" rel="noopener noreferrer">View my Goodreads profile</a>
            </Col>
        </Row>
    </>
  )
}

export default Goodreads;