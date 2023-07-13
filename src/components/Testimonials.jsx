import React from "react";
import men_img from "../assets/image/svg/smile_man.svg";


function Testimonials() {
  return (
    <>
      <section className='py-5'>
        <div data-aos="fade-up"
          data-aos-duration="3000">
          <div className='container'>
            <div className='row overflow-visible'>
              <div className='col-lg-5'>
                <p className='text-uppercase ff_poppins clr_gray fw-semibold fs_18 mb-0'>
                  Testimonials
                </p>
                <p className='text-capitalize fw-bold fs_50 ff_Volkhov mx_409 clr_navy'>
                  What people say about Us.
                </p>
              </div>
              <div className='col-lg-7'>
                <div className='d-flex justify-content-center'>
                  <div className='box position-relative card_box  '>
                    <span className='img_position position-absolute d-none d-xl-block cursor_pointer'>
                      <img src={men_img} alt="men_img" />
                    </span>
                    <p className='ff_poppins fw-medium fs_16 clr_gray '>
                      “On the Windows talking painted pasture yet its express
                      parties use. Sure last upon he same as knew next. Of
                      believed or diverted no.”
                    </p>
                    <p className='clr_gray fw-semibold fs_16 ff_poppins'>
                      Mike taylor
                    </p>
                    <p className='fw-medium fs_16 ff_poppins clr_gray'>
                      Lahore, Pakistan
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

export default Testimonials;
