import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import './Car.css'
const axios = require('axios');


function UsedDetails() {



  const [UseCar_data, setUseCarData] = useState([]);
  const [id, setIndex] = useState();
  const [UsedCarId, setUsedCarId] = useState('');
  const [UCarName, setUCarName] = useState('');
  const [CarPurchaseDate, setCarPurchaseDate] = useState('');
  const [UCarCost, setUCarCost] = useState('');
  const [UCarTransmission, setUCarTransmission] = useState('');
  const [UCarInsuranceType, setUCarInsuranceType] = useState('');
  const [UCarMileage, setUCarMileage] = useState('');
  const [UCarNoOfPrevOwner, setUCarNoOfPrevOwner] = useState('');
  const [UCarRTO, setUCarRTO] = useState('');
  const [UCarDriven, setUCarDriven] = useState('');
  const [UCarStatus, setUCarStatus] = useState('');
  const [CarType, setCarType] = useState('');
  const [BookingStatus, setBookingStatus] = useState('');
  const [SellerId, setSellerId] = useState('');



  useEffect(() => {
    getUseCar();
  }, []);

  function getUseCar() {

    fetch("http://localhost:8000/UsedCar").then((res) => {
      res.json().then((data) => {

        // console.log(data);
        setUseCarData(data);
        setIndex(data[0].id);
        setUsedCarId(data[0].UsedCarId);
        setUCarName(data[0].UCarName);
        setCarPurchaseDate(data[0].CarPurchaseDate)
        setUCarCost(data[0].UCarCost);
        //    console.log(data[3].CarManufacturedate);
        setUCarTransmission(data[0].UCarTransmission);
        setUCarInsuranceType(data[0].UCarInsuranceType);
        setUCarMileage(data[0].UCarMileage);
        setUCarNoOfPrevOwner(data[0].UCarNoOfPrevOwner);
        setUCarRTO(data[0].UCarRTO);
        setUCarDriven(data[0].UCarDriven);
        setUCarStatus(data[0].UCarStatus);
        setCarType(data[0].CarType);
        setBookingStatus(data[0].BookingStatus);
        setSellerId(data[0].SellerId);

        //  console.log(data[0].NewCarId);
      })
    })
  }

  const onSelectUseCar = async (props) => {

    console.log(UseCar_data[props - 1]);

    let item = UseCar_data[props - 1];
    setIndex(item.id);
    setUsedCarId(item.UsedCarId);
    setUCarName(item.UCarName);
    setCarPurchaseDate(item.CarPurchaseDate)
    setUCarCost(item.UCarCost);
    //    console.log(data[3].CarManufacturedate);
    setUCarTransmission(item.UCarTransmission);
    setUCarInsuranceType(item.UCarInsuranceType);
    setUCarMileage(item.UCarMileage);
    setUCarNoOfPrevOwner(item.UCarNoOfPrevOwner);
    setUCarRTO(item.UCarRTO);
    setUCarDriven(item.UCarDriven);
    setUCarStatus(item.UCarStatus);
    setCarType(item.CarType);
    setBookingStatus(item.BookingStatus);
    setSellerId(item.SellerId);
  }

  function OnUpdate(e) {
    
       

    let UseUpdateDtl = {
      UsedCarId, UCarName, CarPurchaseDate, UCarCost, UCarTransmission, UCarInsuranceType,
      UCarMileage,
      UCarNoOfPrevOwner,
      UCarRTO,
      UCarDriven,
      UCarStatus,
      CarType,
      BookingStatus,
      SellerId
    }

    

    alert("Do want to upadte Provider")
    axios.put(`http://localhost:8000/UsedCar/${id}`, {
     
      "UsedCarId":UsedCarId,
      "UCarName":UCarName,
      "CarPurchaseDate":  CarPurchaseDate,
      "UCarCost":UCarCost,
      "UCarTransmission":  UCarTransmission ,
      "UCarInsuranceType":  UCarInsuranceType ,
      "UCarMileage":  UCarMileage ,
      "UCarNoOfPrevOwner":     UCarNoOfPrevOwner  ,
      "UCarRTO":   UCarRTO,
      "UCarDriven":  UCarDriven ,
      "UCarStatus":  UCarStatus,
      "CarType":  CarType ,
      "BookingStatus":  BookingStatus ,
      "SellerId":  SellerId ,
        })
        .then(response => {
            console.log("update");
            getUseCar() 
        })


  }





  return (

    <div>
      <h1>Used Car Table</h1>
    
      <div>
        <Table responsive border={"1"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>UsedCarId</th>
              <th>UCarName</th>
              <th>CarPurchaseDate</th>
              <th>UCarCost</th>
              <th>UCarTransmission</th>
              <th>UCarInsuranceType</th>
              <th>UCarMileage</th>
              <th>UCarNoOfPrevOwner</th>
              <th>UCarRTO</th>
              <th>UCarDriven</th>
              <th>UCarStatus</th>
              <th>CarType</th>
              <th>BookingStatus</th>
              <th>SellerId</th>

            </tr>
          </thead>
          <tbody>

            {
              UseCar_data && UseCar_data.map((obj) =>
                <tr key={obj.UsedCarId}>
                  <td>{obj.id}</td>
                  <td>{obj.UsedCarId}</td>
                  <td>{obj.UCarName}</td>
                  <td>{obj.CarPurchaseDate}</td>
                  <td>{obj.UCarCost}</td>
                  <td>{obj.UCarTransmission}</td>
                  <td>{obj.UCarInsuranceType}</td>
                  <td>{obj.UCarMileage}</td>
                  <td>{obj.UCarNoOfPrevOwner}</td>
                  <td>{obj.UCarRTO}</td>
                  <td>{obj.UCarDriven}</td>
                  <td>{obj.UCarStatus}</td>
                  <td>{obj.CarType}</td>
                  <td>{obj.BookingStatus}</td>
                  <td>{obj.SellerId}</td>
                  <td><button onClick={() => onSelectUseCar(obj.id)}>Update</button></td>
                </tr>
              )
            }

          </tbody>
        </Table>
      </div>
      <div className='box_cardtl'>
       
       
        <div className='form_usecar'>
          <label className='label'>UsedCarId :</label>
          <input className='input_form_usecar' type="text" value={UsedCarId} onChange={(e) => {setUsedCarId(e.target.value)}} /><br></br>

          <label className='label'>UCarName</label>
          <input className='input_form_usecar' type="text" value={UCarName} onChange={(e) => setUCarName(e.target.value)} /><br></br>

          <label className='label'>CarPurchaseDate</label>
          <input className='input_form_usecar' type="text" value={CarPurchaseDate} onChange={(e) => setCarPurchaseDate(e.target.value)} /><br></br>

          <label className='label'>UCarCost</label>
          <input className='input_form_usecar' type="text" value={UCarCost} onChange={(e) => setUCarCost(e.target.value)} /><br></br>

          <label className='label'>UCarTransmission</label>
          <input className='input_form_usecar' type="text" value={UCarTransmission} onChange={(e) => setUCarTransmission(e.target.value)} /><br></br>

          <label className='label'>UCarInsuranceType</label>
          <input className='input_form_newcar'  type="text" value={UCarInsuranceType} onChange={(e) => setUCarInsuranceType(e.target.value)} /><br></br>

          <label className='label'>UCarMileage</label>
          <input className='input_form_usecar'  type="text" value={UCarMileage} onChange={(e) => setUCarMileage(e.target.value)} /><br></br>

          <label className='label'>UCarNoOfPrevOwner</label>
          <input className='input_form_usecar'  type="text" value={UCarNoOfPrevOwner} onChange={(e) => setUCarNoOfPrevOwner(e.target.value)} /><br></br>

          <label className='label'>UCarRTO</label>
          <input className='input_form_usecar' type="text" value={UCarRTO} onChange={(e) => setUCarRTO(e.target.value)} /><br></br>

          <label className='label'>UCarDriven</label>
          <input className='input_form_usecar'  type="text" value={UCarDriven} onChange={(e) => setUCarDriven(e.target.value)} /><br></br>

          <label className='label'>UCarStatus</label>
          <input className='input_form_usecar'  type="text" value={UCarStatus} onChange={(e) => setUCarStatus(e.target.value)} /><br></br>

          <label className='label'>CarType</label>
          <input className='input_form_usecar' type="text" value={CarType} onChange={(e) => setCarType(e.target.value)} /><br></br>

          <label className='label'>BookingStatus</label>
          <input className='input_form_usecar' type="text" value={BookingStatus} onChange={(e) => setBookingStatus(e.target.value)} /><br></br>

          <label className='label'>SellerId</label>
          <input className='input_form_usecar' type="text" value={SellerId} onChange={(e) => setSellerId(e.target.value)} /><br></br>

          <button className='btn_form_newcar' onClick={()=>OnUpdate()} >Update</button>

        </div>
      </div>
      <NavLink to="/home/admin">Back</NavLink>
    </div>


  )
}

export default UsedDetails