const express=require("express")
const app=express()

const mongoose = require('mongoose')


// Connect to the MongoDB database
// mongoose.connect('mongodb+srv://arunkudiyal:examplepwd@cluster0.2pssb.mongodb.net/fsd_elite_db?retryWrites=true&w=majority')
// mongoose.connect('mongodb+srv://Shraddha:<Shraddha@1213>@cluster0.pbvcubn.mongodb.net/E-commerce?retryWrites=true&w=majority')
// .then(console.log('DB Connected Successfully!'))
// .catch(err => console.log(err))



mongoose.connect("mongodb+srv://productDB:productDB@cluster0.9kw2q.mongodb.net/productDB?retryWrites=true&w=majority")
    .then((resp)=>{
        console.log("DB connection Successfully Done")
    })
    .catch((err)=>{
        console.log("Connection failed")
        process.exit(-1)
    })


//
app.use(express.json());    
// API
const productAPI=require("./API/Product/ProductAPI");

app.use("/product",productAPI);

//


const cors = require('cors');
// app.use(cors());

app.get("/home",cors(),async(req,res) =>
{
    res.setDefaultEncoding(cors)
})
// default API

app.use("/",(req,resp)=>{
    resp.json(
        {
            message:"App default API"
        }
    )
})


module.exports=app;