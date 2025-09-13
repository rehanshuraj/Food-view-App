const mongoose  = require('mongoose');

const foodSchema = new mongoose.Schema({
    name:{ type:String, required:true },
    video:{ type:String,  required:true },
    description:{ type:String },

    //to know which food partner added this food item
    foodPartnerId:{ type: mongoose.Schema.Types.ObjectId, ref:"foodpartner", required:true}

})
        

const foodModel = mongoose.model("food",foodSchema);

module.exports = foodModel;