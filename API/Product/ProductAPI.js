const express = require("express")

const router = express.Router()


const mongoose = require('mongoose')
const ProductModel = require("../Model/ProductModel");

router.get("/", (req, resp, next) => {
    resp.status(200)
    resp.header("Access-Control-Allow-Origin", "*");

    //retun data
    resp.json({
        message: "Product Router default API"
    })
})

//sample request for dumy data
router.get("/getAllProduct_Test", (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*");
    resp.json({
        name: "Samsung Watch TEST",
        price: 150,
        rating: 5,
    })
})

// live url
router.get("/getAllProduct", (req, resp, next) => {

    resp.header("Access-Control-Allow-Origin", "*");
    //get from database

    ProductModel.find()
        .then(result => {
            resp.json(result);
        })
        .catch(err => {
            resp.json({
                message: "Error"
            })
        });

})


router.post('/addProduct', (req, resp, next) => {

    //
    // resp.json({
    //     "name":req.body.name
    // })
   

    const productRecord = new ProductModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        productURL:req.body.productURL,
        description:req.body.description
    })

    productRecord.save()
    .then(result=>{
        resp.json(result)
    })
    .catch(err=>{
        resp.json(err)
    })
      
    
    
    //
}

);



router.get("/getProduct/:pID", (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*");
    ProductModel.find({"_id":req.params.pID})
    .then(result=>{
        resp.json(
            {
              "message":"success",
              "data":result  
            }
        )
    })
    .catch()
}
)




    router.patch("/updateProduct", (req, resp, next) => {
        //
        const UpdateProduct=new ProductModel
        (
            {
                _id: req.body.productID,
                name: req.body.name,
                price: req.body.price,
                rating: req.body.rating,
                productURL:req.body.productURL,
                description:req.body.description
            }
        )
        //
        resp.header("Access-Control-Allow-Origin", "*");
        ProductModel.findByIdAndUpdate({"_id":req.body.productID},UpdateProduct)
        .then(

            result=>{
                resp.json(
                    {
                        "message":"Product Updated",
                        "data":result
                    }
                )
            }
        )
        .catch(err=>{
            resp.json(
                {
                    "message":"Product Updataion Failed",
                    "data":err

                }
            )
        })
        //
    })

    router.delete("/deleteProduct", (req, resp, next) => {
        resp.header("Access-Control-Allow-Origin", "*");
        //
        ProductModel.deleteOne({"_id":req.body.productID})
        .then(result=>{
            resp.json(
                {
                    "message":"Product Has been deleted",
                    "data":result
                }
                
            )
        })
        .catch(
            err=>{
                resp.json(
                    {
                        "message":"Product deletion is Failed",
                        "data":err
                    }
                    
                )
            }
        )
        //
    })




module.exports = router;