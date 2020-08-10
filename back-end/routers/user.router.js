
const express = require("express")
const router = express.Router();
const AuthController  = require('../controllers/auth.controller');
const UserController  = require("../controllers/user.controller");

router.post("/refresh",AuthController.protect,AuthController.refresh);
 
router.post("/login", AuthController.signIn); 

router.post("/register",AuthController.register);

router.post("/updateDetail",AuthController.protect,UserController.updateUserDetail);

router.post("/updateSchool",AuthController.protect,UserController.updateUserSchool)

module.exports  = router;  