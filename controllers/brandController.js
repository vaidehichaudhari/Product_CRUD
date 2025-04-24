const brand = require("../data/brand")

function addBrand(req,res){
    bname = req.body.brand_name;
    const brand_i = brands.findIndex(b=>b.brand_name == bname)

    if(brand_i == -1){
        const newBrand = {
            brand_ID:Date.now(),
            brand_name:req.body.brand_name
        }
        brands.push(newBrand)
        res.status(200).send({message:"Brand added successfully"})
    }else{
        res.send(200).status({message:"Brand already exist"})
    }
}
function getAllBrand(req,res){
    res.status(200).send({brands:brands})
}
function addCategory(req,res){}
function updateBrand(req,res){}
function deleteBrand(req,res){}

