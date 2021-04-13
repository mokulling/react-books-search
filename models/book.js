const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: "A title is required! Please input a title",
    },
    img: {
        type: String,
    },
    authors: [
        String
    ],
    linked: {
        type: String
    },
    id: {
        type: String
    }
})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book
