import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import about1 from './../../assets/images/about1.png';
import about2 from './../../assets/images/about2.png';
import about3 from './../../assets/images/about3.png';
import about4 from './../../assets/images/about4.png';
import a1 from './../../assets/images/a1.png';
import a2 from './../../assets/images/a2.png';
import a3 from './../../assets/images/a3.png';
import a4 from './../../assets/images/a4.png';
import a5 from './../../assets/images/a5.png';
import a7 from './../../assets/images/a7.png';
import a6 from './../../assets/images/a6.png';

const cardData = [
    { image: about1, title: 'Éli Breton', subtitle: 'CoFounder', desc: 'Éli Breton is an architecture graduate.He is the founder of CHT and is very interested in blockchain technology and its application. With Real Estate tokenization he hopes to alleviate the housing crisis happening in Canada.', percent: '-1.26' },
    { image: about2, title: 'Cyril Yadak', subtitle: 'CoFounder', desc: 'Cyril Yadak is a real estate developer passionate about cryptocurrencies and developing emerging regions of Canada. He’s a licensed builder and has many years of experience with constructing single family homes', percent: '-1.55' },
    { image: about3, title: 'Umair Riaz', subtitle: 'Developer', desc: 'Umair Riaz is a Web3 Blockchian Developer and consultant working closely on the development of the token. His network of choice is Eth for its security. He is also working as Smart Contract Auditor.', percent: '0.0099' },
    { image: about4, title: 'Dragomir Dobrev', subtitle: 'Technical Advisor', desc: 'Dragomir is a technical advisor on the project. He has a lot of experience with mining and generating passive income with crypto. He has a lot of experience with blockchain technology.', percent: '0.0099' },
];

const Intro = () => {
    const [hovered, setHovered] = useState('0');
    return (
        <>
            <div className='bg-white row'>
                <div className="col-xl-3 col-md-6 m-b60">
                    <img className="rounded" width="200" height="200" src={a1} alt="" />
                    <h6 className="mt-2" style={{ fontSize: "10px", color: "#213166" }}><span style={{ fontSize: "20px", color: "#213166" }}>Éli Breton </span> <br /> Cofounder</h6>
                </div>
                <div className="col-xl-3 col-md-6 m-b60">
                    <img className="rounded" width="200" height="200" src={a2} alt="" />
                    <h6 className="mt-2" style={{ fontSize: "10px", color: "#213166" }}> <span style={{ fontSize: "20px", color: "#213166" }}>Cyril Yadak </span> <br /> Cofounder</h6>
                </div>
                <div className="col-xl-3 col-md-6 m-b60">
                    <img className="rounded" width="200" height="200" src={a3} alt="" />
                    <h6 className="mt-2" style={{ fontSize: "10px", color: "#213166" }}> <span style={{ fontSize: "20px", color: "#213166" }}>Umair Riaz </span> <br />Blockchain Developer</h6>
                </div>
                <div className="col-xl-3 col-md-6 m-b60">
                    <img className="rounded" width="200" height="200" src={a4} alt="" />
                    <h6 className="mt-2" style={{ fontSize: "10px", color: "#213166" }}> <span style={{ fontSize: "20px", color: "#213166" }}>Dragomir Dobrev </span> <br />Technical Advisor</h6>
                </div>
                <div className="col-xl-3 col-md-6 m-b60">
                    <img className="rounded" width="200" height="200" src={a5} alt="" />
                    <h6 className="mt-2" style={{ fontSize: "10px", color: "#213166" }}><span style={{ fontSize: "20px", color: "#213166" }}>Jon Probonas </span> <br /> Business Development & <br/>Strategic Partnerships</h6>
                </div>
                <div className="col-xl-3 col-md-6 m-b60">
                    <img className="rounded" width="200" height="200" src={a7} alt="" />
                    <h6 className="mt-2" style={{ fontSize: "10px", color: "#213166" }}><span style={{ fontSize: "20px", color: "#213166" }}>Quentin Renevier </span> <br /> Marketing Specialist Agora Agency</h6>
                </div>
                <div className="col-xl-3 col-md-6 m-b60">
                    <img className="rounded" width="200" height="200" src={a6} alt="" />
                    <h6 className="mt-2" style={{ fontSize: "10px", color: "#213166" }}><span style={{ fontSize: "20px", color: "#213166" }}> Marius Ganile </span><br /> Marketing Specialist Agora Agency</h6>
                </div>
            </div>
        </>
    )
}
export default Intro;