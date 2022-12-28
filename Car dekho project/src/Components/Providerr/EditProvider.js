// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import Link from "react-router-dom";
// // import { useHistory, useParams } from "react-router-dom";
// import { useNavigate, useParams, Link} from 'react-router-dom';

// const EditProvider = () => {
//   // let history = useHistory();
//   const navigate = useNavigate();

//   const {id} = useParams();
  
//   const [Provider, setProvider] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     website: ""
//   });

//   const { name, username, email, phone, website } = Provider;
//   const onInputChange = e => {
//     setProvider({ ...Provider, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadProvider();
//   }, []);

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.put(`http://localhost:3003/Providers/${id}`, Provider);
//     alert("update Successfully");
//     navigate.push("/");
//   };

//   const loadProvider = async () => {
//     const result = await axios.get(`http://localhost:3003/Providers/${id}` );
//     setProvider(result.data);
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//       <Link className="btn btn-primary" to="/providerr/Provider">
//         back to Profile
//       </Link>
//         <h2 className="text-center mb-4">Edit A User</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="name"
//               value={name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Username"
//               name="username"
//               value={username}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Phone Number"
//               name="phone"
//               value={phone}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Website Name"
//               name="website"
//               value={website}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-warning btn-block">Update User</button>
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProvider;


import React, { useState, useEffect } from "react";
import axios from "axios";
// import Link from "react-router-dom";
// import { useHistory, useParams } from "react-router-dom";
import { useNavigate, useParams, Link} from 'react-router-dom';

const EditProvider = () => {
  // let history = useHistory();
  const navigate = useNavigate();

  const {buyerId} = useParams();
  
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

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://localhost:7193/api/Buyer/12`, Buyer);
    alert("update Successfully");
    navigate.push("/");
  };

  const loadBuyer = async () => {
    const result = await axios.get(`https://localhost:7193/api/Provider?id=4` );
    setBuyer(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
      <Link className="btn btn-primary" to="buyerr/viewprofile">
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
              onChange={e =>setBuyer({...Buyer,buyerName:e.target.value}) }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your mobile"
              name="mobile"
              value={buyerMobile}
              onChange={e =>setBuyer({...Buyer,buyerMobile:e.target.value}) }
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={buyerEmail}
              onChange={e =>setBuyer({...Buyer,buyerEmail:e.target.value}) }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              name="address"
              value={buyerAddress}
              onChange={e =>setBuyer({...Buyer,buyerAddress:e.target.value}) }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your city Name"
              name="city"
              value={buyerCity}
              onChange={e =>setBuyer({...Buyer,buyerCity:e.target.value}) }
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
          
        </form>
      </div>
    </div>
  );
};

export default EditProvider;

