import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react"
import axios from "axios";

const AddSeller=()=>
{
    
    const [shop_name, setshop_name] = useState(""); 
    const [shop_owner, setshop_owner] = useState(""); 
    const [niche, setniche] = useState(""); 
    const [address, setaddress] = useState(""); 
    const [phonenumber, setphonenumber] = useState(""); 
    const [password, setpassword] = useState(0); 
     

    const addSeller = ()=>{

      axios.post("http://localhost:3001/AddSeller", {
        shop_name, 
        shop_owner, 
        niche, 
        address, 
        phonenumber, 
        password, 
        
      }).then(
        alert("add successfully!")
        )
    }

    return(
       <>
        <div className="main-div">
        <div className="center">
        <br/>
          <br/>
          <input  type="text" placeholder="Shop Name" onChange={(event)=>{setshop_name(event.target.value)}} ></input>
          <br/>
          <input  type="text" placeholder="Shop Owner"  onChange={(event)=>{setshop_owner(event.target.value)}}></input>
          <br/>
          <input className="twoFields"  type="text" placeholder="Niche" onChange={(event)=>{setniche(event.target.value)}} ></input>
          <br></br>   
          <input className="username"  type="text" placeholder="Address" onChange={(event)=>{setaddress(event.target.value)}} ></input>
          <br/>
         
          <input className="twoFields"  type="text" placeholder="PhoneNumber" onChange={(event)=>{setphonenumber(event.target.value)}} ></input>
          <br/>
          <input className="twoFields"  type="text" placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}} ></input>
          <br/>
          <button data-testid="btn"  type="button" onClick={addSeller}> Add </button>
          </div>

          

        </div>
       </>
           );
};

export default AddSeller;