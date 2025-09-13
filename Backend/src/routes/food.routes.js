const  express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware")
const foodController = require("../controllers/food.controller")    
const multer = require('multer');

const upload = multer({ 
    storage: multer.memoryStorage(),
});

//food routes API's
// POST - /api/food/ [PROTECTED ROUTE - FOOD PARTNER]
router.post('/', authMiddleware.authFoodPartnerMiddleware,upload.single("vedio"),foodController.createFood)

//api  to give user food items so that user can see food items while scrolling
// GET - /api/food/ [PUBLIC ROUTE]
router.get('/',
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems)

module.exports = router;