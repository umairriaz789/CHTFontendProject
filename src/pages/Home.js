import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
// import house from './../assets/images/house.png';
import logoo from './../assets/images/logoo.png';
import log from './../assets/images/log.png';
import { layout } from './style';
// import robo from './../assets/images/robo.png';
//components
import BannerCard from './../components/Home/BannerCard';
import OneStop from './../components/Home/OneStop';
import TwoStop from './../components/Home/TwoStop';
import ThreeStop from './../components/Home/ThreeStop';
import FourStop from './../components/Home/FourStop';
import RecentNews from './../components/Home/RecentNews';
// import { loadBlockchain } from '../slices/web3ContractSlice';
import { useAppDispatch, useAppSelector } from '../reducer/store';
import Marquee from "react-fast-marquee";
import about1 from './../assets/images/about1.png';
import pic from './../assets/images/pic.png';
import ma3 from './../assets/images/ma3.png';
import mb from './../assets/images/mb.jpg';
// import robo from './../assets/images/robo.png';

import Icon9 from './../assets/images/icons/icon9.svg';
import Icon10 from './../assets/images/icons/icon10.svg';
import Icon11 from './../assets/images/icons/icon11.svg';
import Icon12 from './../assets/images/icons/icon12.svg';
import Icon13 from './../assets/images/icons/icon13.svg';

//images
// import imag1 from './../assets/images/home-banner/imag1.png';
// import img3 from './../assets/images/home-banner/img3.png';
import Shape1 from './../assets/images/home-banner/shape1.png';
// import Shape3 from './../assets/images/home-banner/shape3.png';
import wallet from './../assets/images/icons/wallet.svg';
// import friend from './../assets/images/icons/friend.svg';

// import coin1 from './../assets/images/coins/coin1.png';
// import coin3 from './../assets/images/coins/coin3.png';
import coin4 from './../assets/images/coins/coin4.png';

// import blogig from './../assets/images/blog/blog-ig.png';
// import picture1 from './../assets/images/blog/picture1.png';
// import avatar3 from './../assets/images/avatar/avatar3.jpg';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import CountdownTimer from '../components/MarketPlace/countdownTimer';
import Intro from '../components/About/Intro';
import ModalVideo from 'react-modal-video'
import videobox from './../assets/images/about/videobx.png';
import ma from './../assets/images/ma.png';
import play from './../assets/images/play.svg';
import ma8 from './../assets/images/ma8.jpg';
import m from './../assets/images/m.jpeg';


const datas = [
	{ image: wallet, title: 'Competitive ', desc: "A Start Of A New Era In Property Management" },
	{ image: Icon10, title: 'Support', desc: "CHT explore tokenization in financial systems" },
	{ image: Icon11, title: 'Fast ', desc: "CHT allow investments into virtual assets in 2024" },
	{ image: Icon12, title: 'Security', desc: "CHT succeeds in blockchain equity tokenization trial" }
];

const trustBlog = [
	{ image: Icon9, title: 'Competitive Pricing', desc: "The projects declare everything openly, be it project costs or legal affairs" },
	{ image: Icon10, title: 'Support', desc: "Making real estate affordable and inclusive for everyone. Get in and out of your investment, while getting paid rent daily." },
	{ image: Icon11, title: 'Fast and Easy KYC', desc: "Making real estate affordable and inclusive for everyone. Get in and out of your investment, while getting paid rent daily." },
	{ image: Icon12, title: 'Security', desc: "Making real estate affordable and inclusive for everyone. Get in and out of your investment, while getting paid rent daily." }
];
function Home() {
	const [isOpen, setOpen] = useState(false)
	const [videoOpen, setvideoOpen] = useState(false)
	// const nav = useNavigate();
	// const formDetails = (e) => {
	// 	e.preventDefault();
	// 	nav("/contact-us");
	// };
	// const [selecttext, setSelectText] = useState([coin4, 'Bitcoin']);

	// const dispatch = useAppDispatch()
	// const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);
	const { items: data } = useAppSelector((state) => state.products);
	const [timeLeft, setTimeLeft] = useState(CountdownTimer());



	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(CountdownTimer());
		}, 1000);
		return () => clearTimeout(timer);
	}, [timeLeft]);




	return (
		<div >
			<Header />
			<div className="page-content bg-white">
				<div className="main-bnr style-1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-12 text-center">
								<h1 className="" style={{ color: "#213166" }} >Join the Future of
									<br />Real Estate with</h1>
								<p className="text" style={{ color: "#213166" }}>Canadian Home Token</p>

								{/* <ul className="image-before">
									<li className="left-img "><img width="350" height="350" src={logoo} alt="" /></li>
									<li className="right-img"><img width="200" height="200" src={logoo} alt="" /></li>
								</ul> */}
								<Link to={"/"} className="btn space-lg btn-gradient btn-shadow"
									style={{
										backgroundColor: "#213166",
										color: "white",
										// border: "#213166"
										borderColor: "#213166"
									}}
								>S T A R T  -  N O W</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <div style={{ backgroundColor: "#191c26" }}>
					<marquee
						speed={80}
						loop={0}
						pauseOnHover={true}
					>
						<div style={{ flexDirection: "row", display: "flex" }}>
							{datas.map((item, index) => (
								<div className='col mt-2 ms-5' key={index}
								>
									<div className="card-body d-flex align-items-center">
										<div className="coin-img">
											<img loading="lazy" width="62" height="62" src={item.image?.url} className="img-fluid" alt="" />
										</div>
										<a className='ms-5 text-white'>{item.desc}
											<span className=''
												style={{
													marginLeft: "7px",
													fontSize: "15px"
												}}>
												<Link style={{ color: "#23eb2a" }}>Read More</Link>
											</span>
										</a>
									</div>
								</div>
							))}
						</div>
					</marquee>
				</div> */}
				<div className="bg-white">
					<div className="currancy-wrapper">
						<div className="row justify-content-center">
							<div className="container">
								<div className="row sp60">
									<div className="container wow fadeInUp" data-wow-delay="0.4s">
										<div className="video-bx style-1">
											<div className="video-media">
												<img className="rounded" style={{ width: "100%", height: "400px" }} src={m} alt="" />
												<Link to={"#"} className="popup-youtube play-icon" onClick={() => setOpen(true)}>
													<img style={{ width: "30px", height: "30px" }} src={play} alt="" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="cIO8x_Y6wDA" onClose={() => setOpen(false)} />
				<section className="bg-white content-inner icon-section section-wrapper2"
					style=
					{{
						backgroundColor: "#D5EFF9",
					}}
				>
					<div className="container mt-5">
						<div className="row sp60">
							<OneStop />
						</div>
					</div>
					{/* <img loading="lazy" width="102" height="102" className="bg-shape1" src={Shape1} alt="" /> */}
				</section>
				<section className="bg-white content-inner icon-section section-wrapper2">
					<div className="container">
						<div className="row sp60">
							{/* <TwoStop /> */}
							<div className="col-xl-4 col-md-6 m-b60">
								<div className="container">
									<div className="row sp60">
										<div className="container wow fadeInUp" data-wow-delay="0.4s">
											<div className="video-bx style-1">
												<div className="video-media">
													<img className="rounded" style={{ width: "100%", height: "300px" }} src={ma8} alt="" />
													<Link to={"#"} className="popup-youtube play-icon" onClick={() => setvideoOpen(true)}>
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
						</div>
					</div>
					{/* <img loading="lazy" width="102" height="102" className="bg-shape1" src={Shape1} alt="" /> */}
				</section>
				<ModalVideo channel='youtube' autoplay isOpen={videoOpen} videoId="Xdz6ZCULxYw" onClose={() => setvideoOpen(false)} />
				<section className="bg-white content-inner icon-section section-wrapper2">
					<div className="container">
						<div className="row sp60">
							<ThreeStop />
						</div>
					</div>
				</section>
				<section className="bg-white content-inner icon-section section-wrapper2">
					<div className="container">
						<div className="row sp60">
							<FourStop />
						</div>
					</div>
				</section>
				<section className="bg-white content-inner pricing-plan-wrapper2">
					<img className="bg-shape2" src={Shape1} alt="" />
					<div className="container">
						<div className="section-head text-center">
							<h2 className="title"
								style={{ color: "#213166" }}>Team and Advisors</h2>
						</div>
						<div className="row justify-content-center">
							<Intro />
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	)
}
export default Home;

