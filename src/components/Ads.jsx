import React from "react";
import airlines from "../assets/image/svg/airline.svg";
import jetstar from "../assets/image/svg/slider2.svg";
import expedia from "../assets/image/svg/expedia.svg";
import quantas from "../assets/image/svg/quants.svg";
import alitalia from "../assets/image/svg/altila.svg";
import { Container } from "react-bootstrap";

function Ads() {
  return (
    <>
      <section className='aanimation py-lg-5 bg_sec4 py-4'>
        <Container>
          <div>
            <div class='d-md-flex gap-5 align-items-center justify-content-center'>
              <span className='d-flex justify-content-center justify-content-md-start'>
                <img className="image_bg_clr cursor_pointer" src={airlines} alt="top" />
              </span>
              <span className='d-flex justify-content-md-start justify-content-center'>
                <img className="image_bg_clr cursor_pointer" src={jetstar} alt="top" />
              </span>
              <span className='d-flex justify-content-md-start justify-content-center'>
                <img className="image_bg_clr cursor_pointer" src={expedia} alt="top" />
              </span>
              <span className='d-flex justify-content-md-start justify-content-center'>
                <img className="image_bg_clr cursor_pointer" src={quantas} alt="top" />
              </span>
              <span className='mt-5 mt-md-0 d-flex justify-content-md-start justify-content-center'>
                <img className="image_bg_clr cursor_pointer" src={alitalia} alt="top" />
              </span>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}

export default Ads;
