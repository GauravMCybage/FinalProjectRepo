


import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Buyer from "../Buyerr/Buyer";

const BuyerSignin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email.length === 0) {
      alert("Please enter valid email");
    } else if (password.length === 0) {
      alert("Please enter password");
    } else {
      
      const url = `https://localhost:7193/api/Buyer/login?email=`+email+"&password="+password;
      // const buyerLoginURL=process.env.REACT_BASE_URL+"signin"

      // const body = {
      //   email,
      //   password,
      // };

       axios
        .post(url)
        .then((response) => {
          const result = response.data;
          
          console.log(result);

          sessionStorage.setItem('buyerId', result.buyerId)
          sessionStorage.setItem('buyerName', result.buyerName)
          sessionStorage.setItem('loginStatus', 1)

                
          if(result===""){
            alert("Wrong Credentials")
            navigate('/signin/buyer-signin')
            
          }else{
            alert("Welcome to Car Dekho")
            navigate("/buyerr/viewprofile");
          }
          
        
        })
        .catch((error) => {
          console.log(error);
          
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="buyer-login">
        <div className="row">
          {/* Image */}
          <div className="col">
            {/* <div className="buyer-image">
                            <img src={require('../../../Images/header.jpg')} style={{ width: "100%", height: "80vh", marginTop: "50px" }} />
                        </div> */}
          </div>

          {/* Login Code */}
          <div className="col">
            <div
              className="mb-3 pb-1"
              style={{ color: "#293462", marginTop: "25%" }}
            >
              <span className="h1 fw-bold mb-0">Car Dekho</span>
            </div>

            <h5
              className="fw-normal mb-3 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Sign into your account
            </h5>

            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example17">
                Email address
              </label>
              <input
                type="email"
                id="form2Example17"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                class="form-control form-control-lg"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example27">
                Password
              </label>
              <input
                type="password"
                id="form2Example27"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                class="form-control form-control-lg"
              />
            </div>

            <div className="pt-1 mb-4">
              <button
                class="btn btn-dark btn-lg btn-block"
                type="button"
                onClick={() => {
                  <button onClick={()=>{
                    login()
                }}>
                    Login
                  </button>;

                  login();
                }}
              >
                Login
              </button>
            </div>

            <a className="small text-muted" href="#!">
              Forgot password?
            </a>
            <p className="mb-5 pb-lg-2">
              Don't have an account?{" "}
              <Link to="/signup/buyer-register">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSignin;
