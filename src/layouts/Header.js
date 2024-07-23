import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Logoso from './../assets/images/logoso.png';
import Logosoo from './../assets/images/logosoo.png';
import Log from './../assets/images/log.png';
import LogoWhite from './../assets/images/logos.png';
import { logoutUser } from "../slices/authSlice";
import { loadUser } from "../slices/authSlice";
import Icon10 from './../assets/images/icons/icon10.svg';
import Icon11 from './../assets/images/icons/icon11.svg';
import Icon12 from './../assets/images/icons/icon12.svg';
import meta2 from './../assets/images/meta2.png';
import walet from './../assets/images/walet.png';
import { Button } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import Pdf from "./../assets/images/whitepaper.pdf";
import { useAppSelector } from '../reducer/store';

const datas = [
    { image: Icon10, title: 'Competitive ', desc: "A Start Of A New Era In Property Management" },
    { image: Icon10, title: 'Support', desc: "CHT explore tokenization in financial systems" },
    { image: Icon11, title: 'Fast ', desc: "CHT allow investments into virtual assets in 2024" },
    { image: Icon12, title: 'Security', desc: "CHT succeeds in blockchain equity tokenization trial" }
];
function Header() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [contactModal, setContactModal] = useState(false);
    /* for sticky header */
    const [headerFix, setheaderFix] = React.useState(false);

    const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setheaderFix(window.scrollY > 50);
        });
    }, []);


    useEffect(() => {
        dispatch(loadUser(null));
    }, [dispatch]);


    return (
        <>
            {/* <div className='' style={{ backgroundColor: "#223266" }}>
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
                                            <Link style={{ color: "#9467FE" }}>Read More</Link>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </marquee>
            </div> */}
            <header className="site-header mo-left header header-transparent style-1">
                <div className={`mt-2 sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix">
                        <div className="container clearfix">
                            <div className="logo-header">
                                <Link to={"/"} className="logo-dark"><img src={Logoso} alt="" /></Link>
                                <Link to={"/"} className="logo-light"><img src={Logoso} alt="" /></Link>
                            </div>
                            <button type="button"
                                className={`navbar-toggler  navicon justify-content-end ${sidebarOpen ? 'open' : 'collapsed'}`}
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className={`header-nav navbar-collapse collapse justify-content-end ${sidebarOpen ? "show" : ""}`} id="navbarNavDropdown" >
                                <div className="logo-header mostion">
                                    <NavLink to={"#"} className="logo-dark"><img width="150" height="150"
                                        src={Logoso} alt="" /></NavLink>
                                </div>
                                <ul className="nav navbar-nav navbar"
                                >
                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                    <li><NavLink to={"/marketplace"}>MarketPlace</NavLink></li>
                                    {/* <li><NavLink onClick={() => setContactModal(true)}>MarketPlace</NavLink></li> */}
                                    {/* <li ><NavLink to={"/about-us"}>About Us</NavLink></li> */}
                                    <li><NavLink to={"/blog-list"}>Blog</NavLink></li>
                                    <li href="#" onClick={() => window.open(Pdf)}><NavLink
                                       style={{
                                        color:"#213166",
                                        borderColor: "#213166"
                                    }}
                                    >WhitePaper</NavLink></li>
                                    <li><NavLink to={"/roadmap"}>Roadmap</NavLink></li>
                                    {/* <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li> */}
                                    {auth._id && !auth.isAdmin ? (
                                        <>
                                            <li>
                                                <NavLink to={"/"} >
                                                    <button type="button" className='btn btn-outline-primary text-primary'>
                                                        Account
                                                    </button>
                                                </NavLink>
                                            </li>
                                        </>
                                    ) : (
                                        // <>
                                        //     <li>
                                        //         <NavLink to={"/"} >
                                        //             <button type="button" className='btn btn-outline-secondary text-primary'>
                                        //                 Login
                                        //             </button>
                                        //         </NavLink>
                                        //     </li>
                                        //     <li>
                                        //         <NavLink to={"/"} >
                                        //             <button type="button" className='btn btn-outline-secondary text-primary'>
                                        //                 Sign Up
                                        //             </button>
                                        //         </NavLink>
                                        //     </li>
                                        // </>
                                        <li className={`sub-menu-down  ${showMenu ? "open" : ""}`} id="menushow"
                                            onClick={() => setShowMenu(!showMenu)}>
                                            <button type="button" className='btn dropdown-toggle'
                                                style={{
                                                    backgroundColor: "#213166",
                                                    color:"white",
                                                    borderColor: "#213166"
                                                }}
                                            >Start Now
                                            </button>
                                            <ul className="sub-menu">
                                                <li> <NavLink to={""}>Login</NavLink></li>
                                                {/* <li><NavLink href="https://tasty-earrings-bee.cyclic.app/page-register">Admin Login</NavLink></li> */}
                                                {/* <li><a target="_blank" rel="noreferrer" href="https://tasty-earrings-bee.cyclic.app/">Admin Login</a></li> */}
                                                {/* <a className="btn btn-primary btn-gradient btn-shadow" target="_blank" rel="noreferrer" href="https://tasty-earrings-bee.cyclic.app/page-register">Register</a> */}
                                                <li><NavLink to={""}>Sign Up</NavLink></li>
                                            </ul>
                                        </li>
                                    )}
                                </ul>
                                <Modal className="modal fade" id="exampleModal" centered show={contactModal} onHide={setContactModal}>
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="modal-title" id="exampleModalLabel">Connect a Wallet</h2>
                                            <button type="button" className="btn-close" onClick={() => setContactModal(false)}></button>
                                        </div>
                                        <div className=" text-center mt-5 fw-bold">
                                            <div className="flex flex-row cursor-pointer flex-wrap sm:mt-10 ">
                                                <div className='col'>
                                                    <Button
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        style={{
                                                            backgroundColor: "white",
                                                            borderRadius: "16px",
                                                            color: "#3c0987",
                                                            marginLeft: "15px",
                                                        }}
                                                        className=" font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center ">
                                                        <img
                                                            loading="lazy"
                                                            width="25"
                                                            height="25"
                                                            src={meta2}
                                                            alt="meta"

                                                        />
                                                        <h5 className="mr-3 ml-2" style={{ marginRight: "3px", marginLeft: "13px" }}
                                                        >MetaMask</h5>
                                                    </Button>
                                                </div>
                                                <div className='col'>
                                                    <Button
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        style={{
                                                            backgroundColor: "white",
                                                            borderRadius: "16px",
                                                            color: "#3c0987",
                                                            marginLeft: "15px",
                                                            marginTop: "10px"
                                                        }}
                                                        className=" font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center ">
                                                        <img
                                                            loading="lazy"
                                                            width="35"
                                                            height="25"
                                                            src={walet}
                                                            alt="meta"
                                                        />
                                                        <h5 className="mr-3 ml-2" >WalletConnect</h5>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <label className="form-label d-block fw-bold">Select your favourite wallet to Access MarktetPlace.</label>
                                        </div>
                                        <div className="modal-footer">
                                            <a>By connecting a wallet, you agree to CHT Terms of Service and consent to its Privacy Policy. </a>
                                            <button type="button" className="btn btn-secondary" onClick={() => setContactModal(false)}>Close</button>
                                        </div>
                                    </div>
                                </Modal>
                                <div className="header-bottom">
                                    <div className="dz-social-icon">
                                        <ul>
                                            <li><a target="_blank" className="fab fa-facebook-f" rel="noreferrer" href="https://www.facebook.com/"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-twitter" rel="noreferrer" href="https://twitter.com/"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-linkedin-in" rel="noreferrer" href="https://www.linkedin.com/"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-instagram" rel="noreferrer" href="https://www.instagram.com/"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;