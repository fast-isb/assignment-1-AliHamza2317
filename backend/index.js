const express = require("express"); 

const cors = require("cors"); 

const sellerMOdel = require("./sellerAtt"); 

const app = express()

const mongoose = require("mongoose"); 

mongoose.connect("mongodb+srv://hamza:123@cluster0.btxgzbp.mongodb.net/assignment01?retryWrites=true&w=majority"); 

app.use(cors())
app.use(express.json()); 

app.listen(3001, () => {

    console.log("server runs perfectly"); 
})

app.post("/AddSeller", async(req, res)=>{


    try{
        const seller = req.body;
        const addNew = new sellerMOdel(seller);
        await addNew.save(); 
        res.json(seller);  
    }catch(err){
        console.log(err); 
    }
})

app.get("/GetSeller",(req, res)=>
{

    sellerMOdel.find({},(err,result)=>{

        if(err){
            res.json(err); 
        }
        else{
            res.json(result); 
        }
    })
})