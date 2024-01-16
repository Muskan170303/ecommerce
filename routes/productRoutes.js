const express=require('express')
const Product=require('../models/Product')
const router=express.Router();  //mini instance

router.get('/products', async (req,res)=>{
    let products = await Product.find({});
    res.render('products/index',{products});
})

router.get('/product/new', (req,res)=>{
    res.render('products/new')
})

router.post('/products', async (req,res)=>{
    let {name, img, price, desc}=req.body;
    await Product.create({name, img, price, desc});
    res.redirect('/products')
})

module.exports=router;