require("dotenv").config();
var mongoose = require('mongoose');
var server = require("express")();
var bp = require("body-parser");

var userRouter = require('./routes/user.js')
var todoRouter = require('./routes/todo.js')

server.use(
    bp.urlencoded({
      extended: true
    })
);

server.use(bp.json());

//routers
server.use("/user",userRouter)
server.use("/todo",todoRouter)

server.get('/', (req, res) => res.send('Hello World!'))


async function start(){
    await mongoose.connect("mongodb://localhost:27017,localhost:27018,localhost:27019/todo?replicaSet=rs", {
        useNewUrlParser: true
    })

    server.listen(process.env.PORT, function(){
        console.log(`listening on *:${process.env.PORT}`);
    })
}
start()