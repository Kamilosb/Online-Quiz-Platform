const mongoose = require('mongoose')

// const typeSchema = new mongoose.Schema({
//     type: {
//     }
// })
// TODO: dodać schema do rodzaju pytań (np. true/false, lista odpowiedzi, poprawne odpowiedzi, % osób które wybrały daną odpowiedź (czyli coś typu ankieta))

const questionSchema = new mongoose.Schema({
    question: String,
    answers: [String]
    // type: String,
    // answers: {
    //     type: [String],
    //     required: Boolean
    // }
})

const quizSchema = new mongoose.Schema({
    name: String,
    description: String,
    questions: [questionSchema],
    author: String,
    category: [String],
    rating: {
        type: Number,
        min: 1,
        max: 10
    }

})

module.exports = mongoose.model("quiz", quizSchema)