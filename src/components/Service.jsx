import React from "react";
import calcult from "../assets/image/svg/claculted.svg";
import clrBox from "../assets/image/png/clr-box.png";
import Best_Flights_img from "../assets/image/png/Best_Flights_img.png";
import Customization from "../assets/image/png/Customization_img.png";
import Local_Events from "../assets/image/png/Local_Events.png";
import { Col, Container, Row } from "react-bootstrap";

function Service() {
  return (
    <>
      <section className='py-lg-5 my-lg-5'>
       <Container>
          <p className='fs_18 ff_poppins clr-gray text-center fw-semibold'>
            CATEGORY
          </p>
          <h2 className='fs_50 text-center fw-bold clr_navy ff_Volkhov'>
            We Offer Best Services
          </h2>
          <Row className=' mt-5 align-iteam-center justify-content-center'>
            <Col lg={3} Col sm={6} className=' position-relative' data-aos="zoom-in">
              <div className='service_card px-xl-5 px-4 py-4 d-flex align-items-center justify-content-center flex-column'>
                <img
                  className='position-absolute clr_box'
                  src={clrBox}
                  alt='box'
                />
                <img src={calcult} alt="img" />
                <h3 className='fs_20 mt-3 fw-semibold  ff_open_sans text-center'>
                  Calculated Weather{" "}
                </h3>
                <p className='text-center fs_16 mt-3 ff_poppins fw-medium'>
                  Built Wicket longer admire do barton vanity itself do in it.
                </p>
              </div>
            </Col>
            <Col lg={3} Col sm={6} className='col-lg-3 col-sm-6 position-relative' data-aos="zoom-in">
              <div className='px-4 py-4 d-flex service_card flex-column align-items-center justify-content-center px-xl-5'>
                <img
                  className='position-absolute clr_box'
                  src={clrBox}
                  alt='box'
                />
                <img src={Best_Flights_img} alt="img" />
                <h3 className='fs_20 ff_open_sans mt-3 fw-semibold text-center'>
                  Best Flights
                </h3>
                <p className='text-center fs_16 mt-3 fw-medium ff_poppins'>
                  Engrossed listening. Park gate sell they west hard for the.
                </p>
              </div>
           </Col>
            <Col lg={3} Col sm={6} className=' position-relative' data-aos="zoom-in">
              <div className='service_card px-xl-5 px-4 py-4 d-flex flex-column align-items-center justify-content-center'>
                <img
                  className='position-absolute clr_box'
                  src={clrBox}
                  alt='box'
                />
                <img src={Local_Events} alt="img" />
                <h3 className='fw-semibold mt-3 fs_20 text-center ff_open_sans'>
                  Local Events
                </h3>
                <p className='ff_poppins fw-medium fs_16 mt-3 text-center'>
                  Barton vanity itself do in it. Preferd to men it engrossed listening.
                </p>
              </div>
            </Col>
            <Col lg={3} Col sm={6} className=' position-relative' data-aos="zoom-in">
              <div className='px-4 py-4 d-flex px-xl-5 flex-column align-items-center justify-content-center service_card'>
                <img
                  className='position-absolute clr_box'
                  src={clrBox}
                  alt='box'
                />
                <img src={Customization} alt="img" />
                <h3 className='ff_open_sans fs_20 text-center mt-3 fw-semibold'>
                  Customization
                </h3>
                <p className='fw-medium fs_16 mt-3 text-center ff_poppins'>
                  We deliver outsourced
                  aviation services for
                  military customers
                </p>
              </div>
            </Col>
          </Row>
       </Container>
      </section>
      ;
    </>
  );
}

export default Service;
