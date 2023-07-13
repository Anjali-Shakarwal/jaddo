import React from "react";
import choose_img from "../assets/image/svg/choose-img.svg";
import make_img from "../assets/image/svg/make-img.svg";
import reach_img from "../assets/image/svg/reach-img.svg";
import women_img from "../assets/image/png/book-women-img.png";
import leaf_img from "../assets/image/svg/leaf-circle.svg";
import map_img from "../assets/image/svg/map-circle.svg";
import send_circle_img from "../assets/image/svg/send-circle.svg";
import building_img from "../assets/image/svg/building-img.svg";
import heart_img from "../assets/image/svg/heart-img.svg";
import profile_pic from "../assets/image/svg/profile-img.svg";
import scroll_img from "../assets/image/svg/scrroll-img.svg";

function Book() {
  return (
    <>    
      <section className='py-5 overflow-hidden'>
        <div className='container py-md-5'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-md-6 data-aos="fade-up-right'>
              <p className='mb-0 ff_poppins fw-semibold fs_18 clr_gray'>
                Easy and Fast
              </p>
              <h2 className='ff_Volkhov fw-bold fs_50 mb-0 clr_navy mt-3'>
                Book your next trip in 3 easy steps
              </h2>
              <div className='d-flex align-items-center mt-4 pt-2'>
                <img src={choose_img} alt='choose_img' />
                <div className='ms-4'>
                  <p className='ff_poppins fw-bold fs_16 clr_gray mb-0'>
                    Choose Destination
                  </p>
                  <p className='ff_poppins fw-normal fs_16 clr_gray mb-0 pe-lg-5 me-lg-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-5'>
                <img src={make_img} alt='make_img' />
                <div className='ms-4'>
                  <p className='ff_poppins fw-bold fs_16 clr_gray mb-0'>
                    Make Payment
                  </p>
                  <p className='ff_poppins fw-normal fs_16 clr_gray mb-0 pe-lg-5 me-lg-5'>
                    Lorem ipsum dolor sit am et, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-5'>
                <img src={reach_img} alt='reach_img'/>
                <div className='ms-4'>
                  <p className='ff_poppins fw-bold fs_16 clr_gray mb-0'>
                    Reach Airport on Selected Date
                  </p>
                  <p className='ff_poppins fw-normal fs_16 clr_gray mb-0 pe-lg-5 me-lg-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-6 position-relative' data-aos="fade-up-left">
              <span className='blue_shadow position-absolute z_index_1 d-inline-block'></span>
              <div className='shadow_cards bg-white shadow rounded-5 d-inline-block px-4 py-4 position-relative mt-5 mt-md-0 z_index_3'>
                <div className='shadow_cards shadow ongoing_box_position bg-white py-3 px-3 rounded-4 d-none d-sm-block'>
                  <div className='d-flex'>
                    <img src={profile_pic} alt='profile_pic' />
                    <div className='ms-2 ps-1'>
                      <p className='ff_poppins fw-medium fs_14 mb-0 clr_gray'>
                        Ongoing
                      </p>
                      <p className='ff_poppins fw-medium fs_18 trip_text_color mb-0'>
                        Trip to rome
                      </p>
                      <p className='ff_poppins fw-medium fs_14 clr_gray mt-1 mb-0'>
                        40% <span className='trip_text_color'>completed</span>
                      </p>
                      <img src={scroll_img} alt='scroll_img' />
                    </div>
                  </div>
                </div>
                <img className='w-100' src={women_img}alt='women_img' />
                <h6 className='ff_poppins fw-medium fs_18 mt-4 mb-0'>
                  Trip To Greece
                </h6>
                <div className='d-flex mt-2 pt-1'>
                  <p
                    style={{
                      borderRight: '1px solid #84829A',
                      height: '20px',
                    }}
                    className='ff_poppins fw-medium fs_16 mb-0 clr_gray pe-1'
                  >
                    14-29 June
                  </p>
                  <p className='ff_poppins fw-medium fs_16 clr_gray ms-3'>
                    by Robbin joseph
                  </p>
                </div>
                <div className='d-flex gap-3'>
                  <img
                    className='cursor_pointer'
                    src={leaf_img}
                    alt='leaf_img'
                  />
                  <img className='cursor_pointer' src={map_img} alt='map_img' />
                  <img
                    className='cursor_pointer'
                    src={send_circle_img}
                    alt='send_circle_img'
                  />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className='d-flex align-items-center'>
                    <img src={building_img} alt='building_img' />
                    <p className='ff_poppins fw-medium fs_16 clr_gray mb-0 ms-3'>
                      24 people going
                    </p>
                  </div>
                  <img
                    className='cursor_pointer'
                    src={heart_img}
                    alt='heart_img'
                  />
                </div>
              </div>
              <div className='shadow_cards d-inline-block shadow mt-4 bg-white py-3 px-3 rounded-4 d-sm-none'>
                <div className='d-flex'>
                  <img src={profile_pic} alt='profile_pic' />
                  <div className='ms-2 ps-1'>
                    <p className='ff_poppins fw-medium fs_14 mb-0 clr_gray'>
                      Ongoing
                    </p>
                    <p className='ff_poppins fw-medium fs_18 trip_text_color mb-0'>
                      Trip to rome
                    </p>
                    <p className='ff_poppins fw-medium fs_14 clr_gray mt-1 mb-0'>
                      40% <span className='trip_text_color'>completed</span>
                    </p>
                    <img src={scroll_img} alt='scroll_img ' />
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

export default Book;
