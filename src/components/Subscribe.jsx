import React from "react";
import mail from "../assets/image/svg/mail.svg";
import blue_arrow from "../assets/image/svg/blue_arrow.svg";
import { Container } from "react-bootstrap";

function Subscribe() {
  return (
    <>
    <Container>
        <div className='py-5'>
          <div className='bg_subscribe position-relative' data-aos="zoom-out-down">
            <span className='blue_arrow position-absolute'>
              <img src={blue_arrow} alt="blue_arrow" />
            </span>
            <div className='d-flex align-items-center  flex-column justify-content-center w-100 h-100'>
              <p className='fs_33 text-center fw-semibold clr_gray ff_poppins'>
                Subscribe to get information, latest news and other
                <br></br>interesting
                offers about Jadoo
              </p>
              <div className='d-flex align-items-center gap-4 flex-column justify-content-center flex-lg-row'>
                <div className='input d-flex align-items-center gap-3'>
                  <img src={mail} alt="mail" />
                  <input
                    className='ff_Montserrat fw-normal fs_14'
                    type="text"
                    placeholder="Your email"
                  />
                </div>
                <a
                  href="#"
                  className='fw-semibold  sub_btn ff_Open_Sans fs_17'
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
     </Container>

    </>
  );
}

export default Subscribe;
