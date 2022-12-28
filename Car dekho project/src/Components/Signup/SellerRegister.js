import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router";
const SellerRegister = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');



    const handleSubmit = () => {

        if (name.length === 0) {
            alert("please enter valid name")
        } else if (mobile.length !==10 ) {
            alert("please enter valid mobile")
        } else if (!email.includes("@")) {
                alert("please enter valid email (should have @)")
        } else if (password.length === 0) {
            alert("please enter valid password")
        } else if (confirmPassword !== password) {
            alert("password does not match")
        } else if (address.length === 0) {
            alert("please enter valid address")
        } else if (city.length === 0) {
            alert("please enter valid city")
        } else {
            const url = `https://localhost:7193/api/Seller`

            const body = {
               
               
                sellerName: name,
                sellerMobile:mobile,
                sellerEmail: email,
                sellerPassword: password,
                sellerAddress: address,
                sellerCity:city
             
            }
            navigate('/signin/seller-signin')
            // console.log(body)

            axios.post(url, body).then((response) => {
                const result = response.data
                console.log(result)
            }).catch((error)=>{
                console.log(error)
            })
        }


    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">

                </div>
                {/* Registration Form */}
                <div className="col">
                    <div className="provider-form" style={{ boxShadow: "1px 3px 8px black", marginTop: "25%", padding: "20px" }}>
                        <div className="signup-heading" style={{ fontFamily: "sans-serif", fontSize: "30px" }}>
                            <span>Registration for Seller</span>
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input type="text" value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-12">
                            <label for="inputPassword4" class="form-label">Mobile</label>
                            <input type="tel" class="form-control" onChange={(e) => {
                                setMobile(e.target.value)
                            }} id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputemail" class="form-label">Email</label>
                            <input type="text" class="form-control" onChange={(e) => {
                                setEmail(e.target.value)
                            }} id="inputemail" />
                        </div>
                        <div className="col-12">
                            <label for="inputpassword" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => {
                                setPassword(e.target.value)
                            }} id="inputpassword" />
                        </div>
                        <div className="col-12">
                            <label for="inputconfirm-password" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }} id="inputconfirm-password" />
                        </div>
                        <div className="col-12">
                            <label for="inputaddress" className="form-label">Address</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                setAddress(e.target.value)
                            }} id="inputaddress" />
                        </div>
                        <div className="col-12">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                setCity(e.target.value)
                            }} id="inputCity" />
                        </div>
                        <div className="navigate-login">
                            <span><b>Already registered ? </b><Link to='/signin/seller-signin'>Sigin here</Link></span>
                        </div>
                        <div className="col-12" style={{ marginTop: "25px" }}>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Sign Up</button>
                        </div>

                    </div>
                </div>
                <div className="col">

                </div>
            </div>

        </div>
    )
}

export default SellerRegister