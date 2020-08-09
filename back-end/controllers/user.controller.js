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
    console.log(informationCurrentUser)
    informationCurrentUser._id = undefined;
    res.status(200).json({
        status: "success",
        data : {
            user: informationCurrentUser
        }
    })
})