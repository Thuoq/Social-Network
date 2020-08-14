const express = require('express');
const router = express.Router();


router.get('/message', (req,res,next) => {
    console.log(req);
})


const Chat = require('../models/chat.models');
