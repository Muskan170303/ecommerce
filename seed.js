const mongoose= require('mongoose');
const Product=require('./models/Product');

const products=[
    {
        name:"Classy Attachments",
        img:"https://tse4.mm.bing.net/th?id=OIP.5WV1vjSvE5nkjhy_G3pcRwHaHa&pid=Api&P=0&h=180",
        price:2000,
        desc:"latest attachment glasses"
    },
    {
        name:"Cat Eye",
        img:"https://tse1.mm.bing.net/th?id=OIP.nu1CopZ7zEaMH7rIxxKmcwHaHa&pid=Api&P=0&h=180",
        price:1000,
        desc:"Luxury women frames"
    },
    {
        name:"Round Frame",
        img:"https://i.pinimg.com/originals/f7/9b/31/f79b31348e9f890ae1ee20b8f427bafc.jpg",
        price:700,
        desc:"Modern teenage glasses"
    },
    {
        name:"Rimless Frame",
        img:"https://i.pinimg.com/originals/23/8a/ac/238aacd9b24dbf66963683b845d8c222.png",
        price:1500,
        desc:"Stylish Rimless frames for youth"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully");
}

module.exports=seedDB;