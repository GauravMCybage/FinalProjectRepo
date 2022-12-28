import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';


function Viewbuyer() {

  const [buy_data,setBuyData]=useState([]);

  useEffect(()=>{
   
     fetch("https://localhost:7193/api/Admin/AdminGetallBuyer")
       
       .then(res=> {
          return res.json();

       })
       .then(data=>{
       // console.log(data)
        setBuyData(data);
       // console.log(buy_data)
       });

 
   
  },[]);
 
  
  
   return (
    <div>
      <h1>Buyer  Details</h1>
  
      <Table responsive border={"1"}>
        <thead>
          <tr>
          <th>Buyer </th>
          <th> Name</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
           
          </tr>
        </thead>
        <tbody>
          
            {
              buy_data && buy_data.map((obj)=>
              <tr key={obj.buyerId}>
               <td>{obj.buyerId}</td>
               <td>{obj.buyerName}</td>
               <td>{obj.buyerMobile}</td>
               <td>{obj.buyerEmail}</td>
              <td>{obj.buyerAddress}</td>
               <td>{obj.buyerCity}</td>
              </tr>
              )
            }
            
        
        </tbody>
      </Table>
    
              <NavLink  to="/admin">Back</NavLink>
              
    </div>
    
  )
}
export default Viewbuyer