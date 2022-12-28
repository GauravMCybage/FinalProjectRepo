import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
// import axios from "axios";
 const axios = require('axios');




function DeleteProvider() {
 
  
  const  [buy_data,setBuyData]=useState([]);

 
  useEffect(()=>{
   
    getBuyer();

  },[]);

  function getBuyer()
  {
    fetch("https://localhost:7193/api/Admin/AdminGetallProvider")
       
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
      
     await axios.delete(`https://localhost:7193/api/Admin/AdminDeleteProviderbyId?id=${props}`,{headers})
      console.log('deleted')
       
    } catch (e) {
      alert(e)
    }
    getBuyer();
  }
  
  
 
 
return (
  <div>
   
  <h1>Provider</h1>

  <Table responsive border={"1"}>
    <thead>
      <tr>
     
      <th>ProviderId</th>
      <th>ProviderName</th>
      <th>ProviderMobile</th>
      <th>ProviderEmail</th>
     <th>ProviderAddress</th>
      <th>ProviderCity</th>
      <th>Operations</th>
       
      </tr>
    </thead>
    <tbody>
      
        {
          buy_data && buy_data.map((obj)=>
          <tr key={obj.providerId}>
                
               <td>{obj.providerId}</td>
               <td>{obj.providerName}</td>
               <td>{obj.providerContact}</td>
               <td>{obj.providerEmail}</td>
               <td>{obj.providerAddress}</td>
               <td>{obj.providerCity}</td>
               <td><button  onClick={()=>deletePost(obj.providerId)}>Delete</button></td>
          </tr>
          )
        }
       
    </tbody>
  </Table>

          <NavLink  to="/admin">Back</NavLink>
          
</div>

  )
}

export default DeleteProvider