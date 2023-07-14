import React from "react";
import logo from "../assets/image/svg/logo.svg";
import arrowDown from "../assets/image/svg/down-arrow.svg";
import { Container } from "react-bootstrap";
function Nav() {
    return (
        <>
            <section className='pt-3'>
                <Container>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <a className='ff_inter fw-bold fs_2xl text-white z_index1' href="#">
                            <img src={logo} alt="logo-img" />
                        </a>
                        <ul className='d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end'>
                            <li>
                                <a class='ff_google fs_17 fw-normaly clr_blue' href="#home">
                                    Desitnations
                                </a>
                            </li>
                            <li>
                                <a class='ff_google fs_17 fw-normal clr_blue' href="#home">
                                    Hotels
                                </a>
                            </li>
                            <li>
                                <a class='ff_google fs_17 fw-normal clr_blue' href="#home">
                                    Flights
                                </a>
                            </li>
                            <li>
                                <a class='ff_google fs_17 fw-normal clr_blue' href="#home">
                                    Bookings
                                </a>
                            </li>
                            <li>
                                <a className='ff_google fs_17 clr_blue py-2 px-3' href="#">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a
                                    className='ff_google fs_17 clr_blue nav_btn py-2 px-3'
                                    href="#"
                                >
                                    Sign up
                                </a>
                            </li>
                            <select name="language" id="language" class="border-none bg-transparent google_regular" fdprocessedid="qjbodr">
                                <option value="En">En</option><option value="HI">HI</option><option value="SP">SP</option>
                            </select>
                            

                        </ul>
                        <div className='d-lg-none cursor_pointer'> menu</div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Nav;
