const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({

    name:{
        trim : true,
        type : String,
        required : true
    },
    img:{
        trim : true,
        type : String
    },
    price:{
        type : Number,
        required : true,
        min : 0 
    },
    desc:{
        trim : true,
        type : String
    }

});

let Product= mongoose.model('Product', productSchema);

module.exports = Product;