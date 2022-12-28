import React, { useState, useEffect } from "react";
import axios from "axios";
// import Link from "react-router-dom";
// import { useHistory, useParams } from "react-router-dom";
import { useNavigate, useParams, Link} from 'react-router-dom';

const EditSeller = () => {
  // let history = useHistory();
  const navigate = useNavigate();

  const {id} = useParams();
  
  const [Seller, setSeller] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = Seller;
  const onInputChange = e => {
    setSeller({ ...Seller, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadSeller();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/Sellers/${id}`, Seller);
    alert("update Successfully");
    navigate.push("/");
  };

  const loadSeller = async () => {
    const result = await axios.get(`http://localhost:3003/Sellers/${id}` );
    setSeller(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
      <Link className="btn btn-primary" to="/Sellerr/Seller">
        back to Profile
      </Link>
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Seller</button>
          
        </form>
      </div>
    </div>
  );
};

export default EditSeller;
