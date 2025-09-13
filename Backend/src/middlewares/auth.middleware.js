const foodpartnerModel = require('../models/foodpartner.model'); //to register food partner
const jwt = require('jsonwebtoken'); //to create token so that food partner can login
const userModel = require('../models/user.model'); //to register user



//middleware to protect food partner routes like add food item etc
async function authFoodPartnerMiddleware(req,res,next){
    const token = req.cookies.token; //token is stored in cookie so we get it from cookie
    if(!token){
        return res.status(401).json({
            message: "please login first to access this resource"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET); //to verify token is valid or not, it will give decoded id means it store id in decoded variable
        const foodPartner = await foodpartnerModel.findById(decoded.id); //to get food partner details from token id
        res.foodPartner = foodPartner; //we store food partner details in res object so that we can use it in next function

        next(); //to go to next function
    }catch(err){
        return res.status(401).json({
            message: "Invalid token, please login again"
        })
    }
}

//middleware to protect user routes like view food item etc
async function authUserMiddleware(req,res,next){
    const token = req.cookies.token; //token is stored in cookie so we get it from cookie
    if(!token){
        return res.status(401).json({
            message: "please login first to access this resource"
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET); //to verify token is valid or not, it will give decoded id means it store id in decoded variable
        const user = await userModel.findById(decoded.id); //to get user details from token id
        res.user = user; //we store user details in res object so that we can use it in next function   
        next(); //to go to next function
    }
    catch(err){
        return res.status(401).json({
            message: "Invalid token, please login again"
        })
    }
}



module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware
};