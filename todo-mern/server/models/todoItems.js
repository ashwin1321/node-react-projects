const mongoose = require("mongoose")

// creating a schema
const TodoItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

// export this schema
module.exports = mongoose.model("todos", TodoItemSchema)