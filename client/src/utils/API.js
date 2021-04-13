import axios from 'axios'

export default {
  getAllBooks: function () {
    return axios.get("/api/books")
  },
  postBook: function (data) {
    return axios.post("/api/books", data)
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id)
  },
  getBook: function (id) {
    return axios.get("/api/books/" + id)
  }
}
