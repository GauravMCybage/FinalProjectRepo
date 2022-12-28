import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               Car Dekho
              </h6>
              <p>
              
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/Cartt/Cart' className='text-reset'>
                  Car List
                </a>
              </p>
              <p>
                <a href='/Pages/Aboutus' className='text-reset'>
                  About Us
                </a>
              </p>
              
              <p>
                <a href="/Pages/Contactus" className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                   Pune,Maharashtra
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
              cardekho@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 918806804224
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 20255390
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

     
    </MDBFooter>
  );
}