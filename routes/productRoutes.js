const express=require('express')
const Product=require('../models/Product')
const Review=require('../models/Review')
const router=express.Router();  //mini instance
const {validateProduct}=require('../middleware')

router.get('/error',(req,res)=>{
    res.render('error')
})

router.get('/products', async (req,res)=>{
    try{
        let products = await Product.find({});
        res.render('products/index',{products});
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

router.get('/product/new', (req,res)=>{
    try{
        res.render('products/new')
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

router.post('/products',validateProduct, async (req,res)=>{
    try{
        let {name, img, price, desc}=req.body;
        await Product.create({name, img, price, desc});
        res.redirect('/products')
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

router.get('/products/:id', async (req,res)=>{
    try{
        let {id}=req.params;
        let foundPro= await Product.findById(id).populate('reviews');
        res.render('products/show',{foundPro});
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

router.get('/products/:id/edit' , async (req,res)=>{
    try{ 
        let {id}=req.params; 
        let foundPro= await Product.findById(id);
        res.render('products/edit',{foundPro});
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

router.patch('/products/:id' , validateProduct, async(req,res)=>{
    try{
        let {id}=req.params; 
        let {name, img, price, desc}=req.body;
        await Product.findByIdAndUpdate(id,{name, img, price, desc});
        res.redirect(`/products/${id}`)
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

router.delete('/products/:id', async(req,res)=>{
    try{
        let {id}=req.params;

        // for removing reviews before product
        // const product=await Product.findById(id);
        // for(let id of product.reviews){
        //     await Review.findByIdAndDelete(id)
        // }

        await Product.findByIdAndDelete(id);
        res.redirect('/products')
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

module.exports=router;