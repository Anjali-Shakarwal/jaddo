import React from "react";
import google_play from "../assets/image/svg/Google Play.png";
import apple_store from "../assets/image/svg/play_store.svg";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <section className='py-5'>
        <Container>
          <Row className='align- items-center pb-3'>
            <Col sm={6} Col lg={3} >
              <p className='ff_poppins fw-medium fs_44 clr_navy mb-0 position-relative top_19'>Jadoo.</p>
              <p className='ff_poppins fw-medium fs_13 clr_gray mx_254 '>
                Book your trip in minute, get full Control for much longer.
              </p>
            </Col>
            <Col sm={6} Col lg={3} className='d-lg-none  my-4'>
              <div className='d-flex align-items-center gap-3 mb-4'>
                <a href="#">
                  <span className='d-flex  align-items-center justify-content-center footer_icons'>
                    <svg
                      width='7'
                      height='13'
                      viewBox='0 0 7 13'
                      fill='none'
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d="M6.10837 2.24446C5.78831 2.14321 5.42023 2.0757 5.08417 2.0757C4.66809 2.0757 3.77191 2.36259 3.77191 2.91948V4.25266H5.90033V6.49712H3.77191V12.6905H1.6275V6.49712H0.571289V4.25266H1.6275V3.12199C1.6275 1.41755 2.36364 0 4.13999 0C4.7481 0 5.83632 0.0337513 6.42843 0.253134L6.10837 2.24446Z"
                        fill="#080809"
                      />
                    </svg>
                  </span>{" "}
                </a>
                <a href="#">
                  <span className='d-flex  align-items-center justify-content-center footer_icons'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1722_658)">
                        <path
                          d="M13.6562 0H2.34375C1.05156 0 0 1.05156 0 2.34375V13.6562C0 14.9488 1.05156 16 2.34375 16H13.6562C14.9488 16 16 14.9488 16 13.6562V2.34375C16 1.05156 14.9488 0 13.6562 0ZM15.0625 13.6562C15.0625 14.4316 14.4316 15.0625 13.6562 15.0625H2.34375C1.56844 15.0625 0.9375 14.4316 0.9375 13.6562V2.34375C0.9375 1.56844 1.56844 0.9375 2.34375 0.9375H13.6562C14.4316 0.9375 15.0625 1.56844 15.0625 2.34375V13.6562Z"
                          fill="black"
                        />
                        <path
                          d="M13.1562 1.90625C12.6394 1.90625 12.2188 2.32687 12.2188 2.84375C12.2188 3.36063 12.6394 3.78125 13.1562 3.78125C13.6731 3.78125 14.0938 3.36063 14.0938 2.84375C14.0938 2.32687 13.6731 1.90625 13.1562 1.90625Z"
                          fill="black"
                        />
                        <path
                          d="M8 3.78125C5.67375 3.78125 3.78125 5.67375 3.78125 8C3.78125 10.3263 5.67375 12.2188 8 12.2188C10.3263 12.2188 12.2188 10.3263 12.2188 8C12.2188 5.67375 10.3263 3.78125 8 3.78125ZM8 11.2812C6.19062 11.2812 4.71875 9.80938 4.71875 8C4.71875 6.19062 6.19062 4.71875 8 4.71875C9.80938 4.71875 11.2812 6.19062 11.2812 8C11.2812 9.80938 9.80938 11.2812 8 11.2812Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1722_658">
                          <rect width="16" height="16" fill="black" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>{" "}
                </a>
                <a href="#">
                  <span className=' d-flex align-items-cente justify-content-center footer_iconsr'>
                    <svg
                      width='16'
                      height='13'
                      viewBox='0 0 16 13'
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z"
                        fill="#080809"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </div>
              <p className='fs_20 ff_poppins fw-medium'>
                Discover our app
              </p>
              <div className='d-flex gap-2 align-items-center'>
                <a href="#">
                  <img src={google_play} alt='google_play' />
                </a>
                <a href="#">
                  <img src={apple_store} alt="apple_store" />
                </a>
              </div>
          </Col>
            <Col lg={6} >
              <Row className="d-flex align-items-center">
                < Col sm={4} className="col-6">
                 
                  <p className=' ff_poppins fs_21 clr_dark_black fw-bold mb-4'>
                    Company
                  </p>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='fs_18 mt-5 mb-5  clr_gray fw-medium ff_poppins'
                    >
                      About{" "}
                    </a>
                  </span>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='ff_poppins clr_gray fw-medium fs_18'
                    >
                      Careers
                    </a>
                  </span>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='ff_poppins fs_18 clr_gray fw-medium'
                    >
                      Mobile
                    </a>
                  </span>
               </Col>
                 <Col sm={4} className="col-6">
                  <p className='clr_dark_black ff_poppins fw-bold fs_21 mb-4'>
                    Contact
                  </p>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='ff_poppins fw-medium fs_18 clr_gray'
                    >
                      Help/FAQ
                    </a>
                  </span>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='ff_poppins fw-medium fs_18 clr_gray'
                    >
                      Press{" "}
                    </a>
                  </span>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='ff_poppins fw-medium fs_18 clr_gray'
                    >
                      Affilates
                    </a>
                  </span>
               </Col>
                < Col sm={4} className='col-6 mt-5 mt-sm-0'>
                  <p className='clr_dark_black ff_poppins fw-bold fs_21 mb-4'>
                    More
                  </p>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='ff_poppins fw-medium fs_18 clr_gray'
                    >
                      Airlinefees
                    </a>
                  </span>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='ff_poppins fw-medium fs_18 clr_gray'
                    >
                      Airline
                    </a>
                  </span>
                  <span className='d-block my-2'>
                    <a
                      href="#"
                      className='ff_poppins fw-medium fs_18 clr_gray'
                    >
                      Low fare tips
                    </a>
                  </span>
               </Col>
              </Row>
           </Col>
            <Col lg={3} className= 'd-none d-lg-block '>
              <div className='d-flex align-items-center gap-3 mb-4'>
                <a href="#">
                  <span className='footer_icons d-flex justify-content-center align-items-center'>
                    <svg
                      width='7'
                      height='13'
                      viewBox='0 0 7 13'
                      fill='none'
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d="M6.10837 2.24446C5.78831 2.14321 5.42023 2.0757 5.08417 2.0757C4.66809 2.0757 3.77191 2.36259 3.77191 2.91948V4.25266H5.90033V6.49712H3.77191V12.6905H1.6275V6.49712H0.571289V4.25266H1.6275V3.12199C1.6275 1.41755 2.36364 0 4.13999 0C4.7481 0 5.83632 0.0337513 6.42843 0.253134L6.10837 2.24446Z"
                        fill="#080809"
                      />
                    </svg>
                  </span>{" "}
                </a>
                <a href="#">
                  <span className='footer_icons d-flex justify-content-center align-items-center'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1722_658)">
                        <path
                          d="M13.6562 0H2.34375C1.05156 0 0 1.05156 0 2.34375V13.6562C0 14.9488 1.05156 16 2.34375 16H13.6562C14.9488 16 16 14.9488 16 13.6562V2.34375C16 1.05156 14.9488 0 13.6562 0ZM15.0625 13.6562C15.0625 14.4316 14.4316 15.0625 13.6562 15.0625H2.34375C1.56844 15.0625 0.9375 14.4316 0.9375 13.6562V2.34375C0.9375 1.56844 1.56844 0.9375 2.34375 0.9375H13.6562C14.4316 0.9375 15.0625 1.56844 15.0625 2.34375V13.6562Z"
                          fill="black"
                        />
                        <path
                          d="M13.1562 1.90625C12.6394 1.90625 12.2188 2.32687 12.2188 2.84375C12.2188 3.36063 12.6394 3.78125 13.1562 3.78125C13.6731 3.78125 14.0938 3.36063 14.0938 2.84375C14.0938 2.32687 13.6731 1.90625 13.1562 1.90625Z"
                          fill="black"
                        />
                        <path
                          d="M8 3.78125C5.67375 3.78125 3.78125 5.67375 3.78125 8C3.78125 10.3263 5.67375 12.2188 8 12.2188C10.3263 12.2188 12.2188 10.3263 12.2188 8C12.2188 5.67375 10.3263 3.78125 8 3.78125ZM8 11.2812C6.19062 11.2812 4.71875 9.80938 4.71875 8C4.71875 6.19062 6.19062 4.71875 8 4.71875C9.80938 4.71875 11.2812 6.19062 11.2812 8C11.2812 9.80938 9.80938 11.2812 8 11.2812Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1722_658">
                          <rect width="16" height="16" fill="black" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>{" "}
                </a>
                <a href="#">
                  <span className='footer_icons d-flex justify-content-center align-items-center'>
                    <svg
                      width='16'
                      height='13'
                      viewBox='0 0 16 13'
                      fill='none'
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z"
                        fill="#080809"
                      />
                    </svg>
                  </span>{" "}
                </a>
              </div>
              <p className='ff_poppins fw-medium fs_20 clr_gray'>
                Discover our app
              </p>
              <div className='d-flex align-items-center gap-2'>
                <a href="#">
                  <img src={google_play} alt='google_play' />
                </a>
                <a href="#">
                  <img src={apple_store} alt="apple_store" />
                </a>
              </div>
            </Col>
          </Row>
          <div className='text-center mt-5'>
            <p className='ff_poppins fw-medium fs_14 clr_gray'>
              All rights reserved@jadoo.co
            </p>
          </div>
       </Container>
      </section>
    </>
  );
}

export default Footer;
