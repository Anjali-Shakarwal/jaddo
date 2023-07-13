import React from "react";
import playBtn from "../assets/image/png/Play button.png";
import girl_plane_imgl from "../assets/image/png/girl_plane-img.png";
import layar from "../assets/image/png/hero-yellow-shadow.png";
import red_line from "../assets/image/png/red_line.png";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <section className='position-relative'>
        <div className='position-relative z-2'>
          <Nav />
        </div>
        <img
          className='position-absolute top-0 end-0 z-0'
          src={layar}
          alt="layar"
        />
        <div className='container position-relative z-1'>
          <div className='row'>
            <div className='col-lg-5'>
              <div>
                <p className='fw-bold clr_red fs_20 ff_poppins mt-5'>
                  Best Destinations around the world
                  <img src={red_line} className="red_line d-none d-xl-block" alt="bnt" />
                </p>
                <h1 className='fs_84 ff_Volkhov fw-bold mt-md-4 clr_navy' >
                  Travel, enjoy and live a new and full life
                </h1>
                <p className='fs_16 fw-medium ff_poppins clr_gray pt-1'>
                  Built Wicket longer admire do barton vanity itself do in it.
                  Preferred to sportsmen it engrossed listening. Park gate sell
                  they west hard for the.
                </p>
                <div className='mt-4 pt-2 flex-column d-flex flex-sm-row gap-2 gap-sm-0'>
                  <span className="mt-2">
                    <a
                      className='ff_google fs_18 hero_btn py-3 d-inline-block px-4 text-white'
                      href="#"
                    >
                      Find out more
                    </a>
                  </span>
                  <span className='pb-3'>
                    <img src={playBtn} alt="bnt" />
                    <a className='ff_google clr_gray fs_18' href="#">
                      Find out more
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-7 mt-lg-0'>
              <img className='w-100' src={girl_plane_imgl} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
