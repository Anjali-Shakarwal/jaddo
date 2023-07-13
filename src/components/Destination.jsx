import React from "react";
import rome_img from "../assets/image/png/rome-img.png";
import london_img from "../assets/image/png/london-img.jpg";
import europe_img from "../assets/image/png/europe-img.png";
import send_icon from "../assets/image/svg/send-icon.svg";


function Destination() {
  return (
    <>
      <section className='py-5'>
        <div className='container'>
          <p className='fw-semibold clr_gray fs_18 text-center ff_poppins mb-0'>
            Top Selling
          </p>
          <h2 className='fs_50 mb-0 clr_navy text-center mt-2 fw-bold ff_Volkhov'>
            Top Destinations
          </h2>
          <div className='row justify-content-center mt-sm-5 pt-3'>
            <div className='col-md-4 col-sm-6 mt-4 mt-sm-0' data-aos="fade-right">
              <div className='shadow rounded-4 h-100 shadow_cards'>
                <img
                  className='w-100 destination_img_radius'
                  src={rome_img}
                  alt='rome_img'
                />
                <div className='px-4 pt-4 pb-5'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='ff_poppins mb-0 clr_gray fw-medium fs_18'>
                      Rome, Italty
                    </p>
                    <p className='fw-medium fs_18 mb-0 ff_poppins clr_gray cursor_pointer'>
                      $5,42k
                    </p>
                  </div>
                  <div className='d-flex align-items-center mt-3'>
                    <img src={send_icon} alt="send_icon" />
                    <p className='mb-0 fw-medium fs_16  ff_poppins clr_gray ms-3 cursor_pointer'>
                      10 Days Trip
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 mt-4 mt-sm-0' data-aos="fade-left">
              <div className="shadow_cards shadow rounded-4 h-100">
                <img
                  className='w-100 destination_img_radius'
                  src={london_img}
                  alt='london_img'
                />
                <div className='px-4 pt-4 pb-5'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='fw-medium fs_18 mb-0 ff_poppins clr_gray'>
                      London, UK
                    </p>
                    <p className='ff_poppins fw-medium fs_18 ff_poppins mb-0 clr_gray cursor_pointer'>
                      $4.2k
                    </p>
                  </div>
                  <div className='d-flex align-items-center mt-3 cursor_pointer'>
                    <img src={send_icon} alt='send_icon' />
                    <p className='mb-0 ff_poppins fw-medium fs_16 clr_gray ms-3 cursor_pointer'>
                      12 Days Trip
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 mt-4 mt-md-0' data-aos="fade-left">
              <div className='shadow_cards shadow rounded-4 h-100'>
                <img
                  className='w-100 destination_img_radius'
                  src={europe_img}
                  alt='europe_img'
                />
                <div className='px-4 pt-4 pb-5'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='ff_poppins fw-medium fs_18 mb-0 clr_gray'>
                      Full Europe
                    </p>
                    <p className='ff_poppins fw-medium fs_18 mb-0 clr_gray cursor_pointer'>
                      $15k
                    </p>
                  </div>
                  <div className='d-flex align-items-center mt-3'>
                    <img src={send_icon} alt='send_icon' />
                    <p className='mb-0 ff_poppins fw-medium fs_16 clr_gray ms-3 cursor_pointer'>
                      28 Days Trip
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destination;
