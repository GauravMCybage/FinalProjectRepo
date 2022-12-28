import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
// import axios from "axios";
 const axios = require('axios');




function DeleteBuyer() {
 
  
  const  [buy_data,setBuyData]=useState([]);

 
  useEffect(()=>{
   
    getBuyer();

  },[]);

  function getBuyer()
  {
    fetch("https://localhost:7193/api/Admin/AdminGetallBuyer")
       
    .then(res=> {
       return res.json();

    })
    .then(data=>{
    // console.log(data)
     setBuyData(data);
    // console.log(buy_data)
    });
  }

 
   // delete function with 
  const deletePost = async (props) => {
  
     console.log(props);
    try {
      console.log(props);
      const headers={
        'Accept': 'apllication/json',
        'content-Type': 'apllication/json'
        };
      
     await axios.delete(`https://localhost:7193/api/Admin/AdminDeleteBuyerbyID?id=${props}`,{headers})
      console.log('deleted')
       
    } catch (e) {
      alert(e)
    }
    getBuyer();
  }
  
 
 
return (
  <div>
   
  <h1>Buyer</h1>

  <Table responsive border={"1"}>
    <thead>
      <tr>
        <th>ID</th>
      <th>BuyerId</th>
      <th>Name</th>
      <th>Mobile Number</th>
      <th>Email</th>
     <th>Address</th>
      <th>City</th>
      <th>Delete Operation</th>
       
      </tr>
    </thead>
    <tbody>
      
        {
          buy_data && buy_data.map((obj,index)=>
          <tr key={index}>
            <td>{index+1}</td>
           <td>{obj.buyerId}</td>
           <td>{obj.buyerName}</td>
           <td>{obj.buyerMobile}</td>
           <td>{obj.buyerEmail}</td>
          <td>{obj.buyerAddress}</td>
           <td>{obj.buyerCity}</td>
           <td><button  onClick={()=>deletePost(obj.buyerId)}>Delete</button></td>
          </tr>
          )
        }
       
    </tbody>
  </Table>

          <NavLink  to="/admin">Back</NavLink>
          
</div>

  )
}

export default DeleteBuyer