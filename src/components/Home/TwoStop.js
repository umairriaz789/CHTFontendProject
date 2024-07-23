import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import ma8 from '../../assets/images/ma8.jpg';
import play from '../../assets/images/play.svg';

function TwoStop() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="col-xl-4 col-md-6 m-b60">
                {/* <img className="rounded" src={ma8} alt="" /> */}
                <div className="container">
                    <div className="row sp60">
                        <div className="container wow fadeInUp" data-wow-delay="0.4s">
                            <div className="video-bx style-1">
                                <div className="video-media">
                                    <img className="rounded" style={{ width: "100%", height: "300px" }} src={ma8} alt="" />
                                    <Link to={"#"} className="popup-youtube play-icon" onClick={() => setOpen(true)}>
                                        {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.25 3.75L23.75 15L6.25 26.25V3.75Z" stroke="#9467FE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> */}
                                        <img style={{ width: "30px", height: "30px" }} src={play} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-8 col-md-6 m-b60 mt-5">
                <div className="section-head mt-2 text-end mt-5">
                    <h1 className="title text-end" style={{ color: "#213166" }}>
                        WHAT IS CHT?
                    </h1>
                    <p className="text-end" style={{ color: "#213166" }}>
                        An ecosystem of 2 tokens that provides instant liquidity to real estate
                        investors through tokenization. Invest in the booming canadian market
                        with a few clicks.

                    </p>
                    <Link className="btn btn-gradient btn-shadow" to={""}
                        style={{
                            backgroundColor: "#213166",
                            color: "white",
                            borderColor: "#213166"
                        }}
                    >Learn More</Link>

                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Xdz6ZCULxYw" onClose={() => setOpen(false)} />

        </>
    )
}
export default TwoStop