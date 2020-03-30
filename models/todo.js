const mongoose = require('mongoose');
const Schema = mongoose.Schema


var todoSchema = new Schema({
    message: String,
    checked: Boolean,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

var Todo = mongoose.model('todo', todoSchema);

module.exports = Todo