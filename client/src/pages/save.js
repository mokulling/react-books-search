import React, { useEffect, useState } from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import API from '../utils/API'
import Card from '../components/card'
const Save = () => {
  const [savedBooks, setSavedBooks] = useState([])


  useEffect(() => {
    loadBooks()
  }, []);

  function loadBooks() {
    API.getAllBooks().then(resp => { setSavedBooks(resp.data) })
  }

  function handleDeleteClick(e) {
    e.preventDefault()
    API.deleteBook(e.target.attributes[1].value).then(
      loadBooks()
    )
  }

  return (
    <Container>
      <Row>
        {savedBooks.length === 0 ?
          "No saved books"
          : savedBooks.map((book) => (
            <Col className="col" onClick={handleDeleteClick} key={book._id}>
              <Card
                title={book.title}
                img={
                  book.img === undefined
                    ? ""
                    : `${book.img}`}
                authors={book.authors}
                link={book.link}
                desc={book.desc}
                datavalue={book._id}
              />
            </Col>
          )
          )
        }
      </Row>
    </Container>
  )
}
export default Save
