import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ma1 from './../../assets/images/ma1.jpg';
import maa from './../../assets/images/maa.JPG';
import ma5 from './../../assets/images/ma5.JPG';
import ma6 from './../../assets/images/ma6.JPG';
import ma51 from './../../assets/images/ma2.png';
import ma10 from './../../assets/images/ma10.JPG';
function FourStop() {

    return (
        <>
            <div className="col-xl-9 col-md-6 m-b60">
                <div className="section-head mt-5">
                    <h1 className="title"
                      style={{
                        color: "#213166"
                    }}>
                        BUILDING MORE HOUSES FOR CANADIANS
                    </h1>
                    <p style={{ color: "#213166" }}>
                        Tokenisation allows us fund new projects with a multitude of new investors
                        without relying on governement controled monetary policies. That means, we
                        can build more, faster and give greater returns to our investors.
                    </p>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 m-b60">
                <img className="rounded" src={maa} alt="" />
            </div>
            <div className='row text-center'>
                <div className="col-xl-4 col-md-6 m-b60">
                    <img style={{width:"250px", height:"300px"}} className="rounded" src={ma5} alt="" />
                </div>
                <div className="col-xl-4 col-md-6 m-b60">
                    <img style={{width:"250px", height:"300px"}} className="rounded" src={ma10} alt="" />
                </div>
                {/* <div className="col-xl-6 col-md-6 m-b60">
                    <img style={{width:"400px", height:"300px"}} className="rounded" src={ma6} alt="" />
                </div> */}
                  <div className="col-xl-4 col-md-6 m-b60">
                    <img style={{width:"250px", height:"300px"}} className="rounded" src={ma6} alt="" />
                </div>
            </div>
        </>
    )
}
export default FourStop