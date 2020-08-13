const Chat = require('../models/chat.models');
const EVENTS_SOCKET = require('./Socket.events');
const io = require("../server").io
let userConnected = [];
module.exports = (socket) => {

    socket.on(EVENTS_SOCKET.USER__CONNECTED, user =>{
        user.socketId = socket.id;
        userConnected.push(user);
        console.log(userConnected)
    })

    socket.on("USER_SEND_MESSAGE", async data => {
        let socketId;
        for(let i = 0 ; i < userConnected.length ; i++) {
            if(data.idReceive === userConnected[i]._id ) {
                socketId = userConnected[i].socketId;
                break;
            }
        } 
        io.to(`${socketId}`).emit("SEND_MESSAGE_USER_RECEIVED",data.textMessage);
        await Chat.create(data);
        
    })
} 
