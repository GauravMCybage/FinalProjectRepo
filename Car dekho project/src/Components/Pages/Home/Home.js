// import Carousel from 'react-bootstrap/Carousel';




// function Home() {
//     return (
//         <div className="main-body">
          
//             <div className="main-content">
//                 <div className="image-content" >
//                     <img src={require('../../../Images/caroffer.jpg')} alt='carOffer' style={{width: "100%"}}/>
//                 </div>
//                 <div className="image-content" >
//                     <img src={require('../../../Images/caroffer.jpg')} alt='carOffer' style={{width: "100%"}}/>
//                 </div>
//             </div>
//              <Carousel fade>
//       <Carousel.Item>
//         {/* <img
//           className="d-block w-100"
//           src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//           style={{"height" : "220px", "width" : "220px"}}
//           alt="First slide"
//         /> */}
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <img
//           className="d-block w-100"
//           src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//           style={{"height" : "380px", "width" : "420px"}}
//           alt="Second slide"
//         /> */}

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <img
//           className="d-block w-100"
//           src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
//           style={{"height" : "120px", "width" : "12px" }}
//           alt="Third slide"
//         /> */}

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
            
//         </div>




//     );
// }
// export default Home;
import HeaderImg from "../../../Images/header.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="img">
          <div>
            <img src={HeaderImg} alt=""  />
          </div>
      
        </div>
        
      </div>
    </>
  );
};
export default Home;
