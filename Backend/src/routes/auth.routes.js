const express = require('express');
const authController = require("../controllers/auth.controller")

const router = express.Router();

//user routes API's
router.post('/user/register',authController.registerUser)
router.post('/user/login',authController.loginUser)
router.get('/user/logout',authController.logoutUser)


//food partner routes API's
router.post('/food-partner/register',authController.registerFoodPartner)
router.post('/food-partner/login',authController.loginFoodPartner)
router.get('/food-partner/logout',authController.logoutFoodPartner)


module.exports = router;