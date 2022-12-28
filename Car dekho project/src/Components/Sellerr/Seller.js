import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Seller = () => {
  const [Sellers, setSeller] = useState([]);

  useEffect(() => {
    
    loadSellers();
  }, []);
   /*  load the user list*/
  const loadSellers = async () => {
    const result = await axios.get("http://localhost:3003/Sellers"); //it will get the data

    setSeller(result.data.reverse());// store the data
  };

    // const deleteBuyer = async id => {
    // await axios.delete(`http://localhost:3003/Buyers/${id}`);
    // loadBuyer();
    // };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Welcome Seller</h1>
       <table class="table border shadow">
          <thead class="thead-dark">
            {/* <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr> */}
          </thead>
          <tbody>

              
            {Sellers.map((Seller, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{Seller.name}</td>
                <td>{Seller.username}</td>
                <td>{Seller.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/Sellerr/${Sellers.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/sellerr/editseller/${Seller.id}`}
                  >
                    Edit
                  </Link>
                    {/* <Link
                    class="btn btn-danger"
                    onClick={() => deleteBuyer(Buyer.id)}
                  >
                    Delete
                  </Link>   */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Seller;
