const app = require('express')
const server = require('http').createServer(app)
const { Server } = require('socket.io')
const io = new Server(server,{
  serveClient: false,
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection',(socket)=>{
  console.log("enter");
})

server.listen('3333',()=>{
  console.log("server : http://127.0.0.1:3333");
})