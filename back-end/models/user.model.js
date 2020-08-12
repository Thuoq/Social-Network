const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        trim : true,
        required: [true, "Please provide tell us your name"],
    },
    lastName : {
        type : String,
        trim : true,
        required: [true, "Please provide tell us your name"],
    },
    email: {
        type: String,
        required: [true, "Please provide tell us your  email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    photoAvatar: {
        type: String, 
        default: "https://i.postimg.cc/tgYLsw51/roseses.jpg",
    },
    photoProfile: {
        type: String, 
        default: "https://i.postimg.cc/Qx6jQKF9/1.jpg",
    },
    password: {
        type: String, 
        required: [true, "Please provide tell us your password "],
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type:String,
        required: [true,'Please confirm your password'],
        validate: {
            validator(el) {
                return this.password === el
            },
            message: "Passwords are not the same!"
        }
    },
    country: String,

    district: String,
    state : String,
    name: String,
    sex: {
        type:String,
        default : "Female"
    },
    birthDay: Date,
    school: [{
        name : {
            type: String,
            default: "Thang Long University"
        },
        degree: { 
            type: String,
            default : "Science"
        },
        fieldStudy: {
            type : String,
            default : "Computer Science"
        },
        startYear: {
            type: Number,
            default : 2012
        }, 
        endYear: { 
            type: Number, 
            default : 2020
        }
    }], 

    hobby: {
        type : String,
        default: "Football"
    },
    language: {
        type: String, 
        default: "Japanese"
    },
    passwordChangedAt: Date,
})
 


userSchema.pre('save',async function (next) {
     // ONLY run this function if password was actually modified
    if (!this.isModified('password')) return next();
    // HASH PASSWORD WITH COST 12
    this.password = await bcrypt.hash(this.password,12);
    // UNDEFINED CONFIRM PASSWORD
    this.confirmPassword = undefined;
    next();
})
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if(this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimestamp < changedTimestamp
    }
    return false
}

userSchema.methods.correctPassword = async function (candidatePassword,userPassword) {
    return await bcrypt.compare(candidatePassword,userPassword)
}



const User = mongoose.model("Users",userSchema,'users');

module.exports = User;  