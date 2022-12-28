


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Buyer = () => {
//   const [Buyers, setBuyer] = useState({});

//   useEffect(() => {
    
//     loadBuyers();
//   }, []);
//    /*  load the user list*/
//   const loadBuyers = async () => {
//     const result = await axios.get("https://localhost:7193/api/Buyer/${buyerId}"); 
// console.log(result);
//     setBuyer(result.data);
//     // store the data
//   };

    

//   return (
//     <div>
//    <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">buyerId</th>
//       <th scope="col">buyerName</th>
//       <th scope="col">buyerMobile</th>
//       <th scope="col">buyerEmail</th>
//       <th scope="col">buyerAddress</th>
//       <th scope="col">buyerCity</th>
    
//     </tr>
//   </thead>
//   <tbody>
   
//     <tr>
//       <th scope="row">{Buyers.buyerId}</th>
//       <td>{Buyers.buyerName}</td>
//       <td>{Buyers.buyerMobile}</td>
//       <td>{Buyers.buyerEmail}</td>
//       <td>{Buyers.buyerAddress}</td>
//       <td>{Buyers.buyerAddress}</td>
//       <td>{Buyers.buyerCity}</td>
     
//     </tr>
//     <Link
//                     class="btn btn-outline-primary mr-2"
//                     to={`/buyerr/editbuyer/${Buyer.buyerId}`}
//                   >
//                     Edit
//                   </Link>
                 
//   </tbody>
  
// </table>
//     </div>
    
//   );
// };

// export default Buyer;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Buyer = () => {
  
  const [Buyers, setBuyer] = useState({});

  useEffect(() => {
    
    loadBuyers();
  }, []);
   /*  load the user list*/
  const loadBuyers = async () => {
    const result = await axios.get("https://localhost:7193/api/Buyer/${buyerId}"); //it will get the data
console.log(result);
    setBuyer(result.data);
    // store the data
  };

    // const deleteBuyer = async id => {
    // await axios.delete(`http://localhost:3003/Buyers/${id}`);
    // loadBuyer();
    // };

  return (
    <div>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">buyerId</th>
      <th scope="col">buyerName</th>
      <th scope="col">buyerMobile</th>
      <th scope="col">buyerEmail</th>
      <th scope="col">buyerAddress</th>
      <th scope="col">buyerCity</th>
    
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <th scope="row">{Buyers.buyerId}</th>
      <td>{Buyers.buyerName}</td>
      <td>{Buyers.buyerMobile}</td>
      <td>{Buyers.buyerEmail}</td>
      <td>{Buyers.buyerAddress}</td>
      <td>{Buyers.buyerAddress}</td>
      <td>{Buyers.buyerCity}</td>
     
    </tr>
    <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/buyerr/editbuyer/${Buyer.buyerId}`}
                  >
                    Edit
                  </Link>
                 
  </tbody>
  {/* <ul className="list-group w-50">
        <li className="list-group-item">name: {Buyers.buyerName}</li>
        <li className="list-group-item">user name: {Buyers.buyerMobile}</li>
        <li className="list-group-item">email: {Buyers.buyerEmail}</li>
        <li className="list-group-item">phone: {Buyers.buyerAddress}</li>
        <li className="list-group-item">website: {Buyers.buyerCity}</li>
      </ul> */}
</table>
    </div>
    
  );
};

export default Buyer;


