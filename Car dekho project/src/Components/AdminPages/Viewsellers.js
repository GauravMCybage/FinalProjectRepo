import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';


function Viewsellers() {

  const [buy_data,setBuyData]=useState([]);

  useEffect(()=>{
   
     fetch("https://localhost:7193/api/Admin/AdminGetallSeller")
       
       .then(res=> {
          return res.json();

       })
       .then(data=>{
       // console.log(data)
        setBuyData(data);
       // console.log(buy_data)
       });

  },[]);
 
  console.log(buy_data)

  
   return (
    <div>
      <h1>Seller details</h1>
  
      <Table responsive border={"1"}>
        <thead>
          <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
           
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
              </tr>
              )
            }
            
        
        </tbody>
      </Table>
    
              <NavLink  to="/admin">Back</NavLink>
              
    </div>
    
  )
}
export default Viewsellers