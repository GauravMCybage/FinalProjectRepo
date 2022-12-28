import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';


function ViewProviders() {

  const [buy_data,setBuyData]=useState([]);

  useEffect(()=>{
   
     fetch("https://localhost:7193/api/Admin/AdminGetallProvider")
       
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
      <h1>Provider Details</h1>
  
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
              <tr key={obj.providerId}>
               <td>{obj.providerId}</td>
               <td>{obj.providerName}</td>
               <td>{obj.providerContact}</td>
               <td>{obj.providerEmail}</td>
               <td>{obj.providerAddress}</td>
               <td>{obj.providerCity}</td>
              </tr>
              )
            }
            
        
        </tbody>
      </Table>
    
              <NavLink  to="/admin">Back</NavLink>
              
    </div>
    
  )
}
export default ViewProviders