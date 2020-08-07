const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');


const signToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };
    user.password = undefined;
    res.cookie('jwt', token, cookieOptions);
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        }
    })
}


exports.register  = catchAsync (async (req,res,next) => {
    const newUser = await User.create(req.body);
    createSendToken(newUser,201,res);
})

exports.signIn =  catchAsync(async (req,res,next) => {
    const {email, password} = req.body;
    

    // CHECK USER AND PASSWORD VALID
    const user = await User.findOne({ email }).select("+password");

    const correct = await user.correctPassword (password, user.password);
    
    if(!user || !correct) {
        next(new AppError("Incorrect email or password",401))
    }
    
    createSendToken(user,200,res);
})

exports.protect = catchAsync(async (req,res,next) => {
    let token; 
    if  (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token  = req.headers.authorization.slipt(' ')[1];
    }
    if (!token) {
        return next(
            new AppError('Your are not logged in! Please log in to get access. ', 401)
        );
    }
    // Verify token 
    //promisify(jwt.verify(token))   

})