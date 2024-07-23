import React, { useState } from 'react';
//Images
import Shape1 from './../assets/images/home-banner/shape1.png';
import rp1 from './../assets/images/rp1.png';
import rp2 from './../assets/images/rp2.png';
import rp3 from './../assets/images/rp3.png';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';


function Roadmap() {
    return (
        <div>
            <Header />
            <div className="page-content">
                <div className="dz-bnr-inr style-1 text-center">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1 style={{ color: "#223266" }}>Road Map</h1>
                        </div>
                    </div>
                    {/* <img className="bg-shape2" src={Shape1} alt="" /> */}
                </div>
                <section className=" bg-white">
                    <div className="container">
                        <div className="content-inner-1 text-center">
                            <p className="text">
                            <img style={{width:"1450px", height:"400px"}} className="" src={rp1} alt="" /> 
                            <img style={{width:"1160px", height:"400px"}} className="" src={rp2} alt="" /> 
                            <img style={{width:"1006px", height:"300px"}} className="" src={rp3} alt="" /> 
                            </p>
                        </div>
                    </div>
                </section>
              
            </div>
            <Footer />
        </div>
    )
}
export default Roadmap;