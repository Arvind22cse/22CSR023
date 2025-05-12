const express=require('express');
const app=express();
const mongoose=require('mongoose');
const router=require('./routes/route.js');
const env = require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
// app.get('http://localhost:9876/numbers/e',async (req,res)=>{
//     const test= await 
// })
app.listen(9876,()=>{
    console.log('http://localhost:9876/');
})
