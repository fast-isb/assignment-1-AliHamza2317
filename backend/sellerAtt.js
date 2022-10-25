const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({

    shop_name: {
        type: String, 
        required: true
    }, 

    shop_owner: {
        type: String, 
        required: true
    }, 
    niche: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    phonenumber: {
        type: String, 
        required: true
    }, 
    password: {
        type: Number, 
        required: true
    },

    

   


}); 

const sellerModel = mongoose.model("AddSeller", sellerSchema); 

module.exports = sellerModel; 