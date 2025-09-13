const userModel = require("../models/user.model")
const foodPartnerModel = require("../models/foodpartner.model")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//code for new user reegisteration
async function registerUser(req,res){
    const { name , email , password,phone,address,contactName} = req.body;
    const isUserAlreadyExists = await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(400).json({
            message: "user already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword,
        phone,
        address,
        contactName
    })

    const token = jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(201).json({
        message:"user registered successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}

//code for user to login 
async function loginUser(req,res){
    const {email,password} = req.body;
    const user = await userModel.findOne({
        email
    })

    if(!user){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordMatched = await bcrypt.compare(password,user.password);
    if(!isPasswordMatched){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(200).json({
        message:"user logged in successfully",  
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}

//code for user to logout
function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message: "user logged out successfully"
    })
}

//code for food partner to register
async function registerFoodPartner(req,res){
    const { name , email, password, contactName, phone, address} = req.body;
    const isFoodPartnerAlreadyExists = await foodPartnerModel.findOne({
        email
    })

    if(isFoodPartnerAlreadyExists){
        return res.status(400).json({
            message: "food partner already exists"
        })
    }

    //agar foodpartner already nhi hai to hum uska password hash krke db me store krdenge
    const hashedPassword = await bcrypt.hash(password,10);
    //then we create a new food partner
    const foodPartner = await foodPartnerModel.create({ 
        name,
        email,
        password: hashedPassword,
        contactName,
        phone,
        address
    })
     
    //generate jwt token for food partner because after registration food partner is logged in automatically
    const token = jwt.sign({
        id: foodPartner._id,
    },process.env.JWT_SECRET)

    //set cookie in browser
    res.cookie("token",token)
    res.status(201).json({
        message:"food partner registered successfully",
        //do not send password to frontend
        //so we send only id,name,email
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name,
            contactName: foodPartner.contactName,
            phone: foodPartner.phone,
            address: foodPartner.address
        }
    })
}

//code for food partner to login
async function loginFoodPartner(req,res){
    const {email,password} = req.body;
    const foodPartner = await foodPartnerModel.findOne({
        email
    })  
    if(!foodPartner){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }   
    const isPasswordMatched = await bcrypt.compare(password,foodPartner.password);
    if(!isPasswordMatched){
        return res.status(400).json({   

            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        id: foodPartner._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(200).json({
        message:"food partner logged in successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name
        }
    })
}

//code for food partner to logout
function logoutFoodPartner(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message: "food partner logged out successfully"
    })
}





module.exports ={
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}


//note that :-in express js we cannot read information from body directly
//so we use middleware in app.js  -- app.use(express.json());


