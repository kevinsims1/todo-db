const mongoose = require('mongoose');
const Schema = mongoose.Schema


var userSchema = new Schema({
    name: String,
    todos: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'todo' 
    }]
})

var User = mongoose.model('user', userSchema);

module.exports = User