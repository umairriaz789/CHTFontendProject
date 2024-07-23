import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import about1 from './../../assets/images/about1.png';
// import about2 from './../../assets/images/about2.png';
// import about3 from './../../assets/images/about3.png';
import coin7 from './../../assets/images/coins/coin7.png';
import coin8 from './../../assets/images/coins/coin8.png';
import coin10 from './../../assets/images/coins/coin10.png';
import coin11 from './../../assets/images/coins/coin11.png';
import usdt from './../../assets/images/coins/usdt.png';
import usdc from './../../assets/images/coins/usdc.png';
import eth from './../../assets/images/coins/eth.png';
import pic1 from './../../assets/images/pic1.png';
import pic2 from './../../assets/images/pic2.png';
import pic3 from './../../assets/images/pic3.png';
import pic4 from './../../assets/images/pic4.png';
import pic5 from './../../assets/images/pic5.png';
import pic6 from './../../assets/images/pic6.png';

import ModalVideo from 'react-modal-video'
import ma from './../../assets/images/ma.png';

// const cardData = [
//     {image: usdt, title:'Joshua Freedman', subtitle:'Founder & Leader', desc:'Founder Josh owned a brokerage that operated in over 7 states.He’s a graduate of the University of Pittsburgh in pre-law, and has always been a geek. ', percent:'-1.26'},
//     {image: usdc, title:'David Anglero', subtitle:'CoFounder', desc:'Part of multi-faceted team of tech professionals partnered with Guerrilla experience. Whether it’s new technology, real estate lending, or value add real estate hurdles.', percent:'-1.55'},
//     {image: eth, title:'Umair Riaz', subtitle:'Blockchian Lead dev', desc:'Blockchian Developer/consultant. Graduate from University of Engineering and Technology Lahore and University of the Punjab Lahore, Pakistan. ', percent:'0.0099'},
// ];
const cardData = [
    { image: coin7, title: '1000+', subtitle: 'Founder & Leader', desc: 'Founder Josh owned a brokerage that operated in over 7 states.He’s a graduate of the University of Pittsburgh in pre-law, and has always been a geek. ', percent: '-1.26' },
    { image: coin8, title: '1000+', subtitle: 'CoFounder', desc: 'Part of multi-faceted team of tech professionals partnered with Guerrilla experience. Whether it’s new technology, real estate lending, or value add real estate hurdles.', percent: '-1.55' },
    { image: coin11, title: '500+', subtitle: 'Blockchian Lead dev', desc: 'Blockchian Developer/consultant. Graduate from University of Engineering and Technology Lahore and University of the Punjab Lahore, Pakistan. ', percent: '0.0099' },
];

function BannerCard() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {cardData.map((data, index) => (
                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" key={index}>
                    <div className=" icon-bx-wraper style-1 box-hover">
                        <div className=" justify-between items-center">
                        </div>
                        <section className="bg-white content-inner icon-section section-wrapper2"
					style=
					{{
						backgroundColor: "#D5EFF9",
					}}
				>
					<div className="container">
						<div className="row sp60">
							<div className="container wow fadeInUp" data-wow-delay="0.4s">
								<div className="video-bx style-1">
									<div className="video-media"
									style={{width:"", height:""}}
									>
										<img className="rounded" style={{width:"100%", height:"400px"}} src={ma} alt="" />
										<Link to={"#"} className="popup-youtube play-icon" onClick={() => setOpen(true)}>
											<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M6.25 3.75L23.75 15L6.25 26.25V3.75Z" stroke="#9467FE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="cIO8x_Y6wDA" onClose={() => setOpen(false)} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BannerCard;