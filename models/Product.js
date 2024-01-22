const mongoose=require('mongoose');
const Review = require('./Review');

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
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]

});

productSchema.post('findOneAndDelete',async function(product){
    if(product.reviews.length>0){
        await Review.deleteMany({_id:{$in: product.reviews}})
    }
})

let Product= mongoose.model('Product', productSchema);

module.exports = Product;