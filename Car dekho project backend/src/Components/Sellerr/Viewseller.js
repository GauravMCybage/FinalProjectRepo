
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Viewseller = () => {

  const id=sessionStorage.getItem('sellerId')

  const [Sellers, setSellers] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    address: ""
  });
  useEffect(() => {
    loadBuyers();
  }, []);
  const loadBuyers = async () => {
    const res = await axios.get(`https://localhost:7193/api/Seller/`+id);
    setSellers(res.data);
    console.log(res);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="sellers/viewprofile">
        back to Profile
      </Link>
      <h1 className="display-4">Buyer PROFILE: {Sellers.sellerName}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {Sellers.sellerName}</li>
        <li className="list-group-item">Mobile: {Sellers.sellerMobile}</li>
        <li className="list-group-item">Email: {Sellers.sellerEmail}</li>
        <li className="list-group-item">Address: {Sellers.sellerAddress}</li>
        <li className="list-group-item">City: {Sellers.sellerCity}</li>
      </ul>
      <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/sellers/editSeller/${Sellers.sellerId}`}
                  >
                    Edit
                  </Link>
    </div>
  );
};

export default Viewseller;



// import { useState,useEffect } from 'react'




// function Viewprofile(){
  
//     const [buyer,setBuyer]= useState(null);


   

//     useEffect(()=> {
    
//     fetch('http://localhost:8000/buyer')
     
      
//        .then(res => {
//              return res.json();
//            })
//         .then(data =>
//          {
//          setBuyer(data);
         
//          }
//          ); 
  
// },[]);

// console.log(buyer);



//   return (
//    <div className='buyer'>
//     <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Name</th>
//       <th scope="col">MobilNo</th>
//       <th scope="col">Email</th>
//     </tr>
//   </thead>
  
//   <tbody>
//     {
//        buyer && buyer.map(obj=>
//     <tr>
//       <th scope="row">{obj.id}</th>
//       <td>{obj.name}</td>
//       <td>{obj.mobileno}</td>
//       <td>{obj.email}</td>
      
//     </tr>
//        )
//    }
//   </tbody>
// </table>
//    </div>
//   );

//   }
// export default Viewprofile ;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const Viewprofile = () => {
//   const [Buyer, setBuyer] = useState({
//     BuyerName: "",
//     BuyerMobile: "",
//     BuyerEmail: "",
//     BuyerAddress: "",
//     BuyerCity: ""
//   });
//  // const { BuyerId } = useParams();
// //let BuyerId=null;
//  // const {params} = useParams();
//   const params = new URLSearchParams([['BuyerId', 10]]);
//   useEffect(() => {
//     loadBuyer();
//   }, []);
//   const loadBuyer = async () => {
//     const res = await axios.get('https://localhost:7193/api/Buyer/', { params });
//     setBuyer(res.data);
//   };
//   return (
//     <div className="container py-4">
//       <Link className="btn btn-primary" to="/Buyerr/Buyer">
//         back to Profile
//       </Link>
//       <h1 className="display-4">Buyer Id: {params}</h1>
//       <hr />
//       <ul className="list-group w-50">
//         <li className="list-group-item">BuyerName: {Buyer.BuyerName}</li>
//         <li className="list-group-item">BuyerMobile: {Buyer.BuyerMobile}</li>
//         <li className="list-group-item">BuyerEmail: {Buyer.BuyerEmail}</li>
//         <li className="list-group-item">BuyerAddress: {Buyer.BuyerAddress}</li>
//         <li className="list-group-item">BuyerCity: {Buyer.BuyerCity}</li>
//       </ul>
//       <Link
//                     class="btn btn-outline-primary mr-2"
//                     to={`/buyerr/editbuyer/${Buyer.id}`}
//                   >
//                     Edit
//                   </Link>
//     </div>
//   );
// };

// export default Viewprofile;




// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const Viewseller = () => {
//   const [Seller, setSeller] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     webiste: ""
//   });
//   const { id } = useParams();
//   useEffect(() => {
//     loadSeller();
//   }, []);
//   const loadSeller = async () => {
//     const res = await axios.get(`http://localhost:3003/Sellers/${id}`);
//     setSeller(res.data);
//   };
//   return (
//     <div className="container py-4">
//       <Link className="btn btn-primary" to="/Sellerr/Seller">
//         back to Profile
//       </Link>
//       <h1 className="display-4">Seller Id: {id}</h1>
//       <hr />
//       <ul className="list-group w-50">
//         <li className="list-group-item">name: {Seller.name}</li>
//         <li className="list-group-item">user name: {Seller.username}</li>
//         <li className="list-group-item">email: {Seller.email}</li>
//         <li className="list-group-item">phone: {Seller.phone}</li>
//         <li className="list-group-item">website: {Seller.website}</li>
//       </ul>
//       <Link
//                     class="btn btn-outline-primary mr-2"
//                     to={`/sellerr/editseller/${Seller.id}`}
//                   >
//                     Edit
//                   </Link>
//     </div>
//   );
// };

// export default Viewseller;




// import { useState,useEffect } from 'react'




// function Viewprofile(){
  
//     const [buyer,setBuyer]= useState(null);


   

//     useEffect(()=> {
    
//     fetch('http://localhost:8000/buyer')
     
      
//        .then(res => {
//              return res.json();
//            })
//         .then(data =>
//          {
//          setBuyer(data);
         
//          }
//          ); 
  
// },[]);

// console.log(buyer);



//   return (
//    <div className='buyer'>
//     <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Name</th>
//       <th scope="col">MobilNo</th>
//       <th scope="col">Email</th>
//     </tr>
//   </thead>
  
//   <tbody>
//     {
//        buyer && buyer.map(obj=>
//     <tr>
//       <th scope="row">{obj.id}</th>
//       <td>{obj.name}</td>
//       <td>{obj.mobileno}</td>
//       <td>{obj.email}</td>
      
//     </tr>
//        )
//    }
//   </tbody>
// </table>
//    </div>
//   );

//   }
// export default Viewprofile ;