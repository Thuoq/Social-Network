const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');

const User = require("../models/user.model");

exports.updateUserDetail = catchAsync(async (req,res,next) => {
    const informationCurrentUser = await User.findByIdAndUpdate(req.user._id,req.body,{
        new:true,
        runValidators:true
    })
    if(!informationCurrentUser) {
        return next(new AppError("Invalid user please try login Again",400))
    }
    
    informationCurrentUser._id = undefined;
    res.status(200).json({
        status: "success",
        data : {
            user: informationCurrentUser
        }
    })
})

exports.updateUserSchool = catchAsync(async (req, res, next) => {
    let informationCurrentUser
    
    if(req.headers.uP ==='pri')   {
        informationCurrentUser = await User.findByIdAndUpdate(req.user._id,{
            "$set" : {"school.0": req.body},
        },{
            new:true,
            runValidators:true
        })
        
    }else {
        informationCurrentUser = await User.findByIdAndUpdate(req.user._id,{
            "$set" : {"school.1": req.body},
        },{
            new:true,
            runValidators:true
        }) 
    }
    informationCurrentUser._id = undefined;
    console.log(informationCurrentUser)
    res.status(200).json({
        status: "success",
        data : {
            user: informationCurrentUser
        }
    })
}) 