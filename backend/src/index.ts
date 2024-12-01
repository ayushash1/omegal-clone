import http from 'http'
import { join } from "node:path";
import { Server, Socket } from "socket.io";

const express = require('express')

const app = express();
const server = http.createServer(http)

const io = new Server(server);


io.on("connection", (socket: Socket) => { 
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("listning on *:300");
})
