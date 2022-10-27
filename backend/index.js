const express = require("express"); 

const cors = require("cors"); 

const sellerMOdel = require("./sellerAtt"); 

const app = express()

const mongoose = require("mongoose"); 

// mongoose.connect("mongodb+srv://hamza:123@cluster0.btxgzbp.mongodb.net/assignment01?retryWrites=true&w=majority"); 
mongoose.connect("mongodb+srv://mirzasheraz:mirza123@cluster0.tryltpz.mongodb.net/assignment-01?retryWrites=true&w=majority");
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

app.put("/UpdateSeller/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const result = await sellerMOdel.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Records not Update....",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Updated successfully...",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
    
})

app.delete("/DeleteSeller/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await sellerMOdel.findByIdAndDelete(_id);
        if(result)
        {
            res.json({
                status: "SUCCESS",
                message: "Record Deleted..."
            })
        }
        else{
            res.json({
                status: "Failed",
                message: "Record Not Deleted..."
            })
        }
    }
    catch(e){
        res.send(e)
    }
})