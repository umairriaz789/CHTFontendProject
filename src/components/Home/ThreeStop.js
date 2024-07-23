import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ma9 from './../../assets/images/ma9.jpg';


function ThreeStop() {

    return (
        <>
            <div className="col-xl-7 col-md-6 m-b60">
                <div className="section-head ">
                    <h1 className="title"
                       style={{
                        color: "#213166"
                    }}
                    >
                        PROPERTY TOKENS <span
                        style={{color:"#6bc9b5"}}> OWNERS
                            WILL RECEIVE A PROPORTIONATE SHARE</span> OF PROPERTY INCOME PAID MOUNTHLY IN CHT TOKENS
                        OR USDT
                    </h1>
                </div>
            </div>
            <div className="col-xl-5 col-md-6 m-b60">
                <img  className="rounded" src={ma9} alt="" />
            </div>
        </>
    )
}
export default ThreeStop