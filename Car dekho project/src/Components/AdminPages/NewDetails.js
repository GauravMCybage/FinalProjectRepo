
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import './Car.css'
const axios = require('axios');


function NewDetails() {

  const [NewCar_data, setNewCarData] = useState([]);


  // const [id, setIndex] = useState();


  const [NewCarId, setNewCarId] = useState('');
  const [NCarName, setNCarName] = useState('');
  const [NCarCost, setNCarCost] = useState('');
  const [CarManufacturedate, setCarManufacturedate] = useState('');
  const [NCarTransmission, setNCarTransmission] = useState('');
  const [NCarInsuranceType, setNCarInsuranceType] = useState('');
  const [NCarMileage, setNCarMileage] = useState('');
  const [NCarStatus, setNCarStatus] = useState('');
  const [CarType, setCarType] = useState('');
  const [BookingStatus, setBookingStatus] = useState('');
  const [ProviderId, setProviderId] = useState('');




  useEffect(() => {

    getNewCar();

  }, []);

  function getNewCar() {

    fetch(" https://localhost:7193/api/Provider/GetAllCar").then((res) => {
      res.json().then((data) => {

        


        setNewCarData(data);

        setNewCarId(data[0].newCarId);
        setNCarName(data[0].ncarName);
        setNCarCost(data[0].ncarCost)
        setCarManufacturedate(data[0].carManufacturedate);

        //    console.log(data[3].CarManufacturedate);

        setNCarTransmission(data[0].ncarTransmission);
        setNCarInsuranceType(data[0].ncarInsuranceType);
        setNCarMileage(data[0].ncarMileage);
        setNCarStatus(data[0].ncarStatus);
        setCarType(data[0].carType);
        setBookingStatus(data[0].bookingStatus);
        setProviderId(data[0].providerId);
        //  console.log(data[0].NewCarId);
      })
    })
  }

  const onSelectNewCar = async (props) => {

     console.log(props)
         
    console.log(NewCar_data[props - 1]);

    let item = NewCar_data[props - 1];
    // //console.log(item.id);
    // setIndex(item.id);
    setNewCarId(item.NewCarId);
    setNCarName(item.NCarName);
    setNCarCost(item.NCarCost)
    setCarManufacturedate(item.CarManufacturedate);
    //    console.log(data[3].CarManufacturedate);
    setNCarTransmission(item.NCarTransmission);
    setNCarInsuranceType(item.NCarInsuranceType);
    setNCarMileage(item.NCarMileage);
    setNCarStatus(item.NCarStatus);
    setCarType(item.CarType);
    setBookingStatus(item.BookingStatus);
    setProviderId(item.ProviderId);

  }

  function onUpdateNew() {

    console.log("Pramod");
    let NewUpdateDtl = {
      NewCarId, NCarName,NCarCost, CarManufacturedate,
      NCarTransmission, NCarInsuranceType, NCarMileage,
      NCarStatus, CarType, BookingStatus, ProviderId
    };


    console.log(JSON.stringify(NewUpdateDtl));
   


    axios.put(`https://localhost:7193/api/Admin/AdminUpdateNewCarbyId?id=${NewCarId}`, {

      "newCarId": NewCarId,
      "ncarName": NCarName,
      "ncarCost": NCarCost,
      "carManufacturedate": CarManufacturedate,
      "ncarTransmission": NCarTransmission,
      "ncarInsuranceType":NCarInsuranceType,
      "ncarMileage":  NCarMileage,
      "ncarStatus": NCarStatus,
      "carType": CarType,
      "bookingStatus": BookingStatus,
      "providerId":ProviderId,
     
     
     
        })
        .then(response => {
            console.log("update");
            getNewCar() 
        })



  }


  return (
    <div>
      <div>
        <h1>New Car Details Table</h1>

        <Table responsive border={"1"}>
          <thead>
            <tr>
            
              <th>NewCarId</th>
              <th>NCarName</th>
              <th>NCarCost</th>
              <th>CarManufacturedate</th>
              <th>NCarTransmission</th>
              <th>NCarInsuranceType</th>
              <th>ncarInsuranceType</th>
              <th>NCarStatus</th>
              <th>CarType</th>
              <th>BookingStatus</th>
              <th>ProviderId</th>
              <th>Update</th>

            </tr>
          </thead>
          <tbody>

            {
              NewCar_data && NewCar_data.map((obj) =>
                <tr key={obj.newCarId}>
                  
                  <td>{obj.newCarId}</td>
                  <td>{obj.ncarName}</td>
                  <td>{obj.ncarCost}</td>
                  <td>{obj.CarManufacturedate}</td>
                  <td>{obj.ncarTransmission}</td>
                  <td>{obj.NCarInsuranceType}</td>
                  <td>{obj.ncarMileage}</td>
                  <td>{obj.ncarStatus}</td>
                  <td>{obj.carType}</td>
                  <td>{obj.bookingStatus}</td>
                  <td>{obj.providerId}</td>
                  <td><button onClick={() => onSelectNewCar(obj.newCarId)}>Update</button></td>
                </tr>
              )
            }

          </tbody>
        </Table>
      </div>

      <div className='box_cardtl'>


        <div className='form_newcar'>

          

          <label className='label'>NewCar_Id :</label>
          <input className='input_form_newcar'
            type="text"
            value={NewCarId}
            onChange={(e) => { setNewCarId(e.target.value) }}
          /><br></br>

          <label className='label'>NewCar_Name</label>
          <input className='input_form_newcar'
            type="text"
            value={NCarName}
            onChange={(e) => { setNCarName(e.target.value) }}
          /><br></br>


          <label className='label'>NewCar_Cost</label>
          <input className='input_form_newcar'
            type="text"
            value={NCarCost}
            onChange={(e) => { setNCarCost(e.target.value) }}
          /><br></br>

          <label className='label'>NewCar_Manufaturing_date</label>
          <input className='input_form_newcar' type="text"
            value={CarManufacturedate}
            onChange={(e) => { setCarManufacturedate(e.target.value) }}
          /><br></br>

          <label className='label'>NewCar_Transmission</label>
          <input className='input_form_newcar'
            type="text"
            value={NCarTransmission} onChange={(e) => { setNCarTransmission(e.target.value) }}
          /><br></br>

          <label className='label'>NewCar_Insurance</label>
          <input className='input_form_newcar'
            type="text"
            value={NCarInsuranceType}
            onChange={(e) => { setNCarInsuranceType(e.target.value) }}
          /><br></br>

          <label className='label'>NewCar_Milage</label>
          <input className='input_form_newcar'
            type="text"
            value={NCarMileage} onChange={(e) => { setNCarMileage(e.target.value) }}
          /><br></br>

          <label className='label'>NewCar_Status</label>
          <input className='input_form_newcar'
            type="text"
            value={NCarStatus}
            onChange={(e) => { setNCarStatus(e.target.value) }} /><br></br>

          <label className='label'>NewCar_Type</label>
          <input className='input_form_newcar'
            type="text"
            value={CarType}
            onChange={(e) => setCarType(e.target.value)}
          /><br></br>

          <label className='label'>NewCar_Booking_Status</label>
          <input className='input_form_newcar'
            type="text"
            value={BookingStatus}
            onChange={(e) => setBookingStatus(e.target.value)} /><br></br>

          <label className='label'>NewCar_Provider_Id</label>
          <input className='input_form_newcar'
            type="text"
            value={ProviderId}
            onChange={(e) => { setProviderId(e.target.value) }}
          /><br></br>

          <button className='btn_form_newcar' onClick={() => onUpdateNew()} >Update</button>


        </div>

      </div>
      <div>
        <NavLink to="/admin">Back</NavLink>
      </div>

    </div>

  )
}

export default NewDetails