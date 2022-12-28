

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import Link from "react-router-dom";
// // import { useHistory, useParams } from "react-router-dom";
// import { useNavigate, useParams, Link} from 'react-router-dom';

// const EditBuyer = () => {
//   // let history = useHistory();
//   const navigate = useNavigate();

//   const {buyerId} = useParams();
  
//   const [Buyer, setBuyer] = useState({
//     buyerName: "",
//     buyerMobile: "",
//     buyerEmail: "",
//     buyerAddress: "",
//     buyerCity: ""
//   });

//   const { buyerName, buyerMobile, buyerEmail, buyerAddress, buyerCity } = Buyer;
//   const onInputChange = e => {
//     setBuyer({ ...Buyer, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadBuyer();
//   }, []);

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.put(`https://localhost:7193/api/Buyer/12`, Buyer);
//     alert("update Successfully");
//     navigate.push("/");
//   };

//   const loadBuyer = async () => {
//     const result = await axios.get(`https://localhost:7193/api/Buyer?id=12` );
//     setBuyer(result.data);
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//       <Link className="btn btn-primary" to="buyerr/viewprofile">
//         back to Profile
//       </Link>
//         <h2 className="text-center mb-4">BUYER Profile</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="name"
//               value={Buyer.buyerName}
//               onChange={e =>setBuyer({...Buyer,buyerName:e.target.value}) }
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your mobile"
//               name="mobile"
//               value={buyerMobile}
//               onChange={e =>setBuyer({...Buyer,buyerMobile:e.target.value}) }
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={buyerEmail}
//               onChange={e =>setBuyer({...Buyer,buyerEmail:e.target.value}) }
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Address"
//               name="address"
//               value={buyerAddress}
//               onChange={e =>setBuyer({...Buyer,buyerAddress:e.target.value}) }
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your city Name"
//               name="city"
//               value={buyerCity}
//               onChange={e =>setBuyer({...Buyer,buyerCity:e.target.value}) }
//             />
//           </div>
//           <button className="btn btn-warning btn-block">Update User</button>
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditBuyer;


import React, { useState, useEffect } from "react";
import axios from "axios";
// import Link from "react-router-dom";
// import { useHistory, useParams } from "react-router-dom";
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditBuyer = () => {
  // let history = useHistory();
  const navigate = useNavigate();
  const id = sessionStorage.getItem('buyerId');

  const [Buyer, setBuyer] = useState({
    buyerName: "",
    buyerMobile: "",
    buyerEmail: "",
    buyerAddress: "",
    buyerCity: ""
  });

  const { buyerName, buyerMobile, buyerEmail, buyerAddress, buyerCity } = Buyer;
  const onInputChange = e => {
    setBuyer({ ...Buyer, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBuyer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://localhost:7193/api/Buyer/` + id, Buyer).then((response) => {
      console.log(response.data)
      alert("update Successfully");
      navigate('/buyerr/viewprofile')
    });
  };

  const loadBuyer = async () => {
    const result = await axios.get(`https://localhost:7193/api/Buyer?id=` + id);
    setBuyer(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <Link className="btn btn-primary" to="/buyerr/viewprofile">
          back to Profile
        </Link>
        <h2 className="text-center mb-4">BUYER Profile</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={Buyer.buyerName}
              onChange={e => setBuyer({ ...Buyer, buyerName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your mobile"
              name="mobile"
              value={buyerMobile}
              onChange={e => setBuyer({ ...Buyer, buyerMobile: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={buyerEmail}
              onChange={e => setBuyer({ ...Buyer, buyerEmail: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              name="address"
              value={buyerAddress}
              onChange={e => setBuyer({ ...Buyer, buyerAddress: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your city Name"
              name="city"
              value={buyerCity}
              onChange={e => setBuyer({ ...Buyer, buyerCity: e.target.value })}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>

        </form>
      </div>
    </div>
  );
};

export default EditBuyer;
