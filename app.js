const express = require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose')
const ejsMate = require('ejs-mate')
const seedDB=require('./seed');
const productRoutes= require('./routes/productRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/apna_ecommerce')
.then(()=>{
    console.log("DB connected successfully.")
})
.catch((err)=>{
    console.log("DB error");
    console.log(err);
})

// seedDB()

app.engine('ejs',ejsMate)
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname , 'public')))
app.use(express.urlencoded({extended:true}))

app.use(productRoutes);


let PORT=8080;
app.listen(PORT, ()=>{
    console.log(`server connected at port ${PORT}`);
})