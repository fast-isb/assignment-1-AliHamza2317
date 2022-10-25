import  { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './index.css';

const EditSeller=()=>{

    const[Data,setData]=useState([]);
    const[RowData,setRowData]=useState([]);
    const[ViewShow,setViewShow]=useState(false)
    const handleViewShow=()=>
    {
        setViewShow(true)
    }
    const handleViewClose=()=>
    {
        setViewShow(false)
    }

        useEffect(()=>{
            axios.get("http://localhost:3001/GetSeller")
            .then((response)=>{
                setData(response.data); 
            }); 

        },[]); 
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
            <Button size="sm" variant="warning">Edit</Button>
            <Button size="sm" variant="danger">Delete</Button>
            </td>
            
        </tr>
        )
    })}
        </tbody>
        </table>
        </div>
        {/* <div className="form-group">
                    <input type="text" className="form-control" value={RowData.shop_name} readOnly/>
                    </div> */}

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
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleViewClose}>Close</button>
      </div>
      </Modal>
</div>
            </div>
           
       

        
    );
}

export default EditSeller;