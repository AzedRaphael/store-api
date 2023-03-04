const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Provide name'],
    },
    price:{
        type:Number,
        required:[true, 'Provide Product price']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default: 0
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    category:{
        type:String,
        enum:{
            values: ["shoes","phone","furnitures"],
            message:'{VALUE} is not supported'
        }
    }
});

module.exports = mongoose.model('Store', storeSchema)