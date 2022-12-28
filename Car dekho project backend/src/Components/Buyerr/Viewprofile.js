
// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const Viewprofile = () => {

//   const id=sessionStorage.getItem('buyerId')

//   const [Buyers, setBuyers] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     city: "",
//     address: ""
//   });
//   const { buyerId } = useParams();
//   useEffect(() => {
//     loadBuyers();
//   }, []);
//   const loadBuyers = async () => {
//     const res = await axios.get(`https://localhost:7193/api/Buyer?id=`+id);
//     setBuyers(res.data);
//     console.log(res);
//   };
//   return (
//     <div className="container py-4">
//       <Link className="btn btn-primary" to="buyerr/viewprofile">
//         back to Profile
//       </Link>
//       <h1 className="display-4">Buyer PROFILE: {buyerId}</h1>
//       <hr />
//       <ul className="list-group w-50">
//         <li className="list-group-item">Name: {Buyers.buyerName}</li>
//         <li className="list-group-item">Mobile: {Buyers.buyerMobile}</li>
//         <li className="list-group-item">Email: {Buyers.buyerEmail}</li>
//         <li className="list-group-item">Address: {Buyers.buyerAddress}</li>
//         <li className="list-group-item">City: {Buyers.buyerCity}</li>
//       </ul>
//       <Link
//                     class="btn btn-outline-primary mr-2"
//                     to={`/buyerr/editbuyer/${Buyers.buyerId}`}
//                   >
//                     Edit
//                   </Link>
//     </div>
//   );
// };

// export default Viewprofile;



import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Viewprofile = () => {

  const id=sessionStorage.getItem('buyerId')

  const [Buyers, setBuyers] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    address: ""
  });
  const { buyerId } = useParams();
  useEffect(() => {
    loadBuyers();
  }, []);
  const loadBuyers = async () => {
    const res = await axios.get(`https://localhost:7193/api/Buyer?id=`+id);
    setBuyers(res.data);
    console.log(res);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="buyerr/viewprofile">
        back to Profile
      </Link>
      <h1 className="display-4">Buyer PROFILE: {buyerId}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {Buyers.buyerName}</li>
        <li className="list-group-item">Mobile: {Buyers.buyerMobile}</li>
        <li className="list-group-item">Email: {Buyers.buyerEmail}</li>
        <li className="list-group-item">Address: {Buyers.buyerAddress}</li>
        <li className="list-group-item">City: {Buyers.buyerCity}</li>
      </ul>
      <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/buyerr/editbuyer/${Buyers.buyerId}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/Cartt/Cart`}
                  >
                    Car List
                  </Link>
    </div>
  );
};

export default Viewprofile;





