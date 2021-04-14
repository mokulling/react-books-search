import React, { useState } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import axios from 'axios'
import Card from '../components/card'
import API from "../utils/API"

const Home = () => {
  const [books, setBooks] = useState([])


  function handleForm(e) {
    e.preventDefault()
    let searchQuery = e.target[0].value.replace(/\s/g, '+')
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setBooks(res.data.items)
      }).catch(err => console.log(err))
  }

  function handleSaveClick(e) {
    e.preventDefault()
    API.getBook(e.target.parentElement.childNodes[5].attributes.dataid.value).then(resp => {
      if (resp.data === null) {
        let saveBookData = {
          title: e.target.parentElement.childNodes[1].innerHTML,
          img: e.target.parentElement.childNodes[0].src,
          authors: e.target.parentElement.childNodes[2].innerHTML,
          desc: e.target.parentElement.childNodes[3].innerHTML,
          link: e.target.parentElement.childNodes[4].href,
          id: e.target.parentElement.childNodes[5].attributes.dataid.value,
        }
        API.postBook(saveBookData)
          .then(res => { console.log(res) })
          .catch(err => console.log(err))
      } else {
        alert("book has already been saved!")
      }
    })

  }

  return (
    <Container>
      <Row>
      </Row>
      <Row>
        {books.map((book) => (
          <Col className="col" onClick={handleSaveClick} key={book.id}>
            <Card
              title={book.volumeInfo.title}
              img={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`}
              authors={book.volumeInfo.authors}
              link={book.volumeInfo.canonicalVolumeLink}
              desc={book.volumeInfo.description}
              dataid={book.id}
            />
          </Col>
        )
        )}
      </Row>
    </Container>
  )
}

export default Home
