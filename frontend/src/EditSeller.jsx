import  { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './index.css';


const EditSeller=()=>{

    const [shop_name, setshop_name] = useState(""); 
    const [shop_owner, setshop_owner] = useState(""); 
    const [niche, setniche] = useState(""); 
    const [address, setaddress] = useState(""); 
    const [phonenumber, setphonenumber] = useState(""); 
    const [password, setpassword] = useState(0); 
    const[id,setid]=useState("");
    const[Data,setData]=useState([]);
    const[RowData,setRowData]=useState([]);
    const[ViewShow,setViewShow]=useState(false)


    const[Delete,setDelete]=useState(false)
    const handleViewShow=()=>
    {
        setViewShow(true)
    }
    const handleViewClose=()=>
    {
        setViewShow(false)
    }
    const[ViewEdit,setViewEdit]=useState(false)
    const handleViewEdit=()=>
    {
        setViewEdit(true)
    }
    const handleViewEditClose=()=>
    {
        setViewEdit(false)
    }
    const handleEdit=()=>
    {
      const url=`http://localhost:3001/UpdateSeller/${id}`
      const Credentials = { shop_name, shop_owner, niche, address, phonenumber,password }
      axios.put(url, Credentials)
          .then(response => {
              const result = response.data;
              const { status, message } = result;
              if (status !== 'SUCCESS') {
                  alert(message, status)
              }
              else {
                  alert(message)
                  window.location.reload()
              }
          })
          .catch(err => {
              console.log(err)
          })
    }
    

        useEffect(()=>{
            axios.get("http://localhost:3001/GetSeller")
            .then((response)=>{
                setData(response.data); 
            }); 

        },[]); 

        const handleDelete=()=>
        {
          const url=`http://localhost:3001/DeleteSeller/${id}`
          axios.delete(url).
          then(response=>{
            const result=response.data;
            const{status,message}=result;
            if(status!="SUCCESS")
            {
              alert(message,status)
            }
            else{
              alert(message)
              window.location.reload();
            }


          })
          .catch(err=>{
            console.log(err);
          })
        }
      
    return(
        <div>
           <div className="viewtable">
           <table class="table table-scriptred table-hover table-bordered">
  <thead>
    <tr>
      
      <th scope="col">ShopName</th>
      <th scope="col">ShopOwner</th>
      <th scope="col">Niche</th>
      <th scope="col">Address</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {Data.map((item)=>
    {
        return (
        <tr >
           
            <td>{item.shop_name}</td>
            <td>{item.shop_owner}</td>
            <td>{item.niche}</td>
            <td>{item.address}</td>
            <td>{item.phonenumber}</td>
            <td>{item.password}</td>
            <td style={{minWidth:190}}>
            <Button size="sm" variant="primary" onClick={()=>{handleViewShow(setRowData(item))}}>View</Button>
            <Button size="sm" variant="warning"  onClick={()=>{handleViewEdit(setRowData(item),setid(item._id))}}>Edit</Button>
            <Button size="sm" variant="danger"   onClick={()=>{handleViewShow(setRowData(item),setid(item._id),setDelete(true))}}>Delete</Button>
            </td>
            
        </tr>
        )
    })}
        </tbody>
        </table>
        </div>

                    <div class="modal" tabindex="-1" >
     <Modal show={ViewShow}
     onHide={handleViewClose}
     backdrop="static"
     keyboard={false}>
      <div className="modal-header" >
        <h5 className="modal-title">Seller Data</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleViewClose}> </button>
      </div>
      <div className="modal-body">
                    <div className="form-group">
                    <input type="text" className="form-control" value={RowData.shop_name} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.shop_owner} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.niche} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.address} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.phonenumber} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.password} readOnly/>
                    </div>
                    {
                      Delete &&(
                        <Button type="submit" className="btn btn-danger mt-4" onClick={handleDelete}>Delete Seller</Button>
                      )
                    }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleViewClose}>Close</button>
      </div>
      </Modal>
</div>

<div class="modal" tabindex="-1" >
     <Modal show={ViewEdit}
     onHide={handleViewEditClose}
     backdrop="static"
     keyboard={false}>
      <div className="modal-header" >
        <h5 className="modal-title">Edit Seller</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleViewEditClose}> </button>
      </div>
      <div className="modal-body">
                    <div className="form-group">
                    <label>shop_name</label>
                    <input type="text" className="form-control" placeholder="Shop Name" onChange={(event)=>{setshop_name(event.target.value)}}    defaultValue={RowData.shop_name}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>shop_owner</label>
                    <input type="text" className="form-control" placeholder="Shop Owner"  onChange={(event)=>{setshop_owner(event.target.value)}}  defaultValue={RowData.shop_owner}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>niche</label>
                    <input type="text" className="form-control"  placeholder="Niche" onChange={(event)=>{setniche(event.target.value)}}    defaultValue={RowData.niche}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>address</label>
                    <input type="text" className="form-control" placeholder="Address" onChange={(event)=>{setaddress(event.target.value)}}  defaultValue={RowData.address}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>phonenumber</label>
                    <input type="text" className="form-control"  placeholder="PhoneNumber" onChange={(event)=>{setphonenumber(event.target.value)}}   defaultValue={RowData.phonenumber}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>password</label>
                    <input type="text" className="form-control"  placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}}  defaultValue={RowData.password}/>
                    </div>
                    <Button type="submit" className="btn btn-warning mt-4" onClick={handleEdit}>Update Seller</Button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleViewEditClose}>Close</button>
      </div>
      </Modal>
      </div>
            </div>
           
       

        
    );
}

export default EditSeller;