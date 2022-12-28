import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
// import axios from "axios";
 const axios = require('axios');




function DeleteSeller() {
 
  
  const  [buy_data,setBuyData]=useState([]);

 
  useEffect(()=>{
   
    getBuyer();

  },[]);

  function getBuyer()
  {
    fetch("https://localhost:7193/api/Admin/AdminGetallSeller")
       
    .then(res=> {
       return res.json();

    })
    .then(data=>{
    // console.log(data)
     setBuyData(data);
    // console.log(buy_data)
    });
  }

   
// delete function
  const deletePost = async (props) => {
    try {
      console.log(props);
      const headers={
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
        };
      
     await axios.delete(`https://localhost:7193/api/Admin/AdminDeleteSellerbyId?id=${props}`,{headers})
      console.log('deleted')
       
    } catch (e) {
      alert(e)
    }
    getBuyer();
  }
  
 
 
 
return (
  <div>
   
  <h1>Seller</h1>

  <Table responsive border={"1"}>
    <thead>
      <tr>
    
      <th>Id</th>
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
          buy_data && buy_data.map((obj)=>
          <tr key={obj.sellerId}>
          
               <td>{obj.sellerId}</td>
               <td>{obj.sellerName}</td>
               <td>{obj.sellerMobile}</td>
               <td>{obj.sellerEmail}</td>
               <td>{obj.sellerAddress}</td>
               <td>{obj.sellerCity}</td>
           <td><button  onClick={()=>deletePost(obj.sellerId)}>Delete</button></td>
          </tr>
          )
        }
       
    </tbody>
  </Table>

          <NavLink  to="/admin">Back</NavLink>
          
</div>

  )
}

export default DeleteSeller