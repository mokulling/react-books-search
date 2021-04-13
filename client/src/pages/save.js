import React, { useEffect, useState } from 'react'
import Container from '../components/container/container'
import SavedCard from '../components/savedCards/savedcard'
import Row from '../components/row/row'
import Col from '../components/col/col'
import API from '../utils/API'
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
              <SavedCard
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
