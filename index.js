import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)

const io = new Server(server)

app.get('/',(req,res)=>{
    res.send('Hello from server')
})

io.on('connection',(socket)=>{
    socket.on('msg',(message)=>{
        if(!message){
            return console.log("Write something")
        }
      socket.emit('Hello user')
    })
  
    console.log(socket.id)
  })

server.listen(3000,()=>{
    console.log(`app is running at port 8080`)
})