import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

//Images
import Icon11 from './../../assets/images/icons/icon11.svg';
import Icon13 from './../../assets/images/icons/icon13.svg';
import pic1 from './../../assets/images/about/pic1.jpg';
import pic2 from './../../assets/images/about/pic2.jpg';
import log from './../../assets/images/log.png';
import Shape1 from './../../assets/images/home-banner/shape1.png';
import { Modal } from 'react-bootstrap';
import meta2 from './../../assets/images/meta2.png';
import walet from './../../assets/images/walet.png';
import { useAppDispatch, useAppSelector } from '../../reducer/store';
import { loadBlockchain, loadWalletConnect, updatAccount } from '../../slices/web3ContractSlice';


const cardData = [
    { image: Icon11, title: 'Fast and Easy KYC', desc: "Once you create your account and verify your email address, you will be prompted to fill in some information about yourself, otherwise known as KYC (Know Your Customer)." },
    // {image: Icon12, title:'Security',desc:"Forget expensive brokers and lock-in periods. Easily reinvest your rental income for the long term, or list your holdings for sale, whenever you like."},
    { image: Icon13, title: 'Fast Transactions', desc: "You’ll get your first partial rent payment that same day, and daily after that. Your holdings will grow along with the property value, too." },
];

function OneStop() {
    const [isConnected, setIsConnected] = useState(false);
    const [contactModal, setContactModal] = useState(false);
    const dispatch = useAppDispatch()

    const handleblockchain = () => {
        dispatch(loadBlockchain());
        setIsConnected(true);
    };

    const handleWalletConnect = () => {
        dispatch(loadWalletConnect());
        setIsConnected(true);
    };

    return (
        <>
            {/* {cardData.map((item, ind) => (
                <div className="col-xl-4 col-md-6 m-b60" key={ind}>
                    <div className="icon-bx-wraper style-3 text-center">
                        <div className="icon-media"
                            style={{ backgroundColor: "#666464" }}
                        >
                            <img src={item.image} alt="" />
                        </div>
                        <div className="icon-content">
                            <h4 className="title">{item.title}</h4>
                            <p className="m-b0">{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))} */}
            <div className="col-xl-8 col-md-6 m-b60">
                <div className="section-head mt-5">
                    
                    <h2 className="title"
                        style={{ color: "#213166" }}
                    >
                        THE FIRST CANADIAN REAL
                        ESTATE TOKENIZATION
                        COMPANY LEADING RWA
                        INNOVATION
                        {/* <span className="text-primary"> owners will receive a proportionate share
                            of property income </span> */}
                    </h2>
                    <p style={{ color: "#213166" }}>
                        Invest in a booming housing market with the simplicity, affordability and
                        scalability that tokenisation brings to the table.
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
            <div className="col-xl-4 col-md-6 m-b60">
                <div className="icon-bx-wraper style-4"
                // style={{ backgroundImage: "url(" + pic2 + ")" }}
                >
                    <div className="inner-content">
                        <div className="icon-media m-b30">
                            <img width="102" height="102" src={Shape1} alt="" />
                            
                        </div>
                        <div className='title'>INITIAL COIN OFFERING</div>
                        <div className="icon-content">
                        <h1>Coming Soon</h1>
                            {/* <form className="dzForm">
                            <div className="dzFormMsg"></div>
                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                            <div className="row">
                                <div className="col-xl-12">
                                    <button name="submit" type="submit" value="Submit" className="btn btn-primary">Submit Now</button>
                                </div>
                            </div>
                        </form> */}
                            <Link onClick={() => setContactModal(true)} className="btn"
                                style={{
                                    backgroundColor: "#213166",
                                    color: "white",
                                    borderColor: "#213166"
                                }}
                            >Connect Wallet</Link>
                        </div>
                    </div>
                </div>
            </div>
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
                                    onClick={() => handleblockchain()}
                                    className=" font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center ">
                                    <img
                                        loading="lazy"
                                        width="25"
                                        height="25"
                                        src={meta2}
                                        alt="meta"
                                        onClick={() => handleblockchain()}
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
                                    onClick={() => handleWalletConnect()}
                                    className=" font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center ">
                                    <img
                                        loading="lazy"
                                        width="35"
                                        height="25"
                                        src={walet}
                                        alt="meta"
                                        onClick={() => handleWalletConnect()}
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
        </>
    )
}
export default OneStop