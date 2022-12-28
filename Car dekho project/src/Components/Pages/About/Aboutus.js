import AboutImg from "../../../Images/header.jpg";
import "./about.css";


const Aboutus = () => {
    return (
        <>
        <div className="about-container">
            <div className="row">
                <div className=".col.sm.5">
                <img src={AboutImg} className="img-fluid" alt="" />
                </div>
                <div className=".col.sm.6">
                    <h6>Car Dekho</h6>
                    <h5>Come Ride With Us</h5>
                    <p>...
                        
                    </p>
                </div>

            </div>
        </div>

        </>
    );
};

export default Aboutus;