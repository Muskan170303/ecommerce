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

router.get('/products/:id', async (req,res)=>{
    let {id}=req.params;
    let foundPro= await Product.findById(id);
    res.render('products/show',{foundPro});
})

router.get('/products/:id/edit' , async (req,res)=>{
    let {id}=req.params; 
    let foundPro= await Product.findById(id);
    res.render('products/edit',{foundPro});
})

router.patch('/products/:id' , async(req,res)=>{
    let {id}=req.params; 
    let {name, img, price, desc}=req.body;
    await Product.findByIdAndUpdate(id,{name, img, price, desc});
    res.redirect(`/products/${id}`)
})

module.exports=router;