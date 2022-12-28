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

// const Viewprovider = () => {
//   const [Provider, setProvider] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     webiste: ""
//   });
//   const { id } = useParams();
//   useEffect(() => {
//     loadProvider();
//   }, []);
//   const loadProvider = async () => {
//     const res = await axios.get(`http://localhost:3003/Providers/${id}`);
//     setProvider(res.data);
//   };
//   return (
//     <div className="container py-4">
//       <Link className="btn btn-primary" to="/providerr/provider">
//         back to Profile
//       </Link>
//       <h1 className="display-4">Provider Id: {id}</h1>
//       <hr />
//       <ul className="list-group w-50">
//         <li className="list-group-item">name: {Provider.name}</li>
//         <li className="list-group-item">user name: {Provider.username}</li>
//         <li className="list-group-item">email: {Provider.email}</li>
//         <li className="list-group-item">phone: {Provider.phone}</li>
//         <li className="list-group-item">website: {Provider.website}</li>
//       </ul>
//       <Link
//                     class="btn btn-outline-primary mr-2"
//                     to={`/providerr/editprovider/${Provider.id}`}
//                   >
//                     Edit
//                   </Link>
//     </div>
//   );
// };

// export default Viewprovider;


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Viewprovider = () => {
  const id=sessionStorage.getItem('providerId')
  const [Buyers, setBuyers] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    address: ""
  });
  const { providerId } = useParams();
  useEffect(() => {
    loadBuyers();
  }, []);
  const loadBuyers = async () => {
    const res = await axios.get(`https://localhost:7193/api/Provider?id=`+id);
    setBuyers(res.data);
    console.log(res);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="providerr/viewprofile">
        back to Profile
      </Link>
      <h1 className="display-4">Buyer PROFILE: {providerId}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {Buyers.providerName}</li>
        <li className="list-group-item">Mobile: {Buyers.providerMobile}</li>
        <li className="list-group-item">Email: {Buyers.providerEmail}</li>
        <li className="list-group-item">Address: {Buyers.providerAddress}</li>
        <li className="list-group-item">City: {Buyers.providerCity}</li>
      </ul>
      <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/providerr/editprovider/${Buyers.providerId}`}
                  >
                    Edit
                  </Link>
    </div>
  );
};

export default Viewprovider;




