
const express = require("express")
const router = express.Router();
const AuthController  = require('../controllers/auth.controller');

router.post("/refresh",AuthController.protect,AuthController.refresh);
 
router.post("/login", AuthController.signIn); 

router.post("/register",AuthController.register);

router.post("/update",AuthController.protect);

module.exports  = router;  