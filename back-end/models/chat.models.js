const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
    idSend : mongoose.Types.ObjectId,
    idReceive : mongoose.Types.ObjectId,
    textMessage : String,
    createAt: Date
})



const Chat = mongoose.model("Chats",chatSchema,"chats");


module.exports = Chat;