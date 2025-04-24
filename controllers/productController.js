const products = require('../data/products')
const categories = require('../data/categories')

function getAllProducts(req,res){
    res.status(200).send({products:products, success:true})
}

function getProductByID(req,res){
    const ID = req.params.ID;
    index = products.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"Product not found", success:false})
    }
    // const prod = products.filter(p=> p.id == id)
    const prod = products[index];
    res.status(200).send({product:prod, success:true})
}

function addProduct(req,res){
    console.log("*****", req.body,"********");
    const cat_ID = req.body.category_id
    const cat_index = categories.findIndex(c => c.id == cat_ID)

    if(cat_index == -1){
        res.status(400).send({message:"Category not found"})
    }else{
    const newProd = {id:Date.now(), 
        name:req.body.name, 
        category:req.body.category,
        price:req.body.price,
        inStock:true
    }
    products.push(newProd);
    res.send({message:"Product added successfully",success:true})
}
}

function deleteProduct(req,res){
    const ID = req.params.ID
    index = products.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"Product not found", success:false})
    }
    products.splice(index,1)
    res.status(200).send({message:"product deleted", success:true})
}


function updateProduct(req,res){
    const ID = req.params.ID
    index = products.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"Product not found", success:false})
    }
    products[index].price = req.body.price
    res.status(200).send({message:"product updated", success:true})
    
    }

    const getProductsByQuery = (req,res)=>{
        console.log("$$$$$$",req.query)
        const prod_p = req.query.price
    fil_Prod = products.filter(p=>p.price <= prod_p)
    res.status(202).send({p:fil_Prod})
    }
    
    module.exports = {
        addProduct,
        getAllProducts, 
        getProductByID, 
        updateProduct, 
        deleteProduct,
        getProductsByQuery
    }