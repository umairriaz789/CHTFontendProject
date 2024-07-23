import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Shape1 from './../../assets/images/home-banner/shape1.png';
import Shape3 from './../../assets/images/home-banner/shape3.png';
import meta from './../../assets/images/meta.png'
import { Modal } from 'react-bootstrap';
import meta2 from './../../assets/images/meta2.png';
import walet from './../../assets/images/walet.png';
import { useAppDispatch, useAppSelector } from '../../reducer/store';
import { loadBlockchain, loadWalletConnect, updatAccount } from '../../slices/web3ContractSlice';



const LandPage = () => {
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

  // Account Switching
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (data) => {
        dispatch(updatAccount(data));
        window.localStorage.setItem("data", data);
        console.log("updated Account", data);
      })
    }
  })


  return (
    <div >
      <div className="dz-bnr-inr style-1 text-center">
        <div className="container">
          <div className=" dz-bnr-inr-entry">
            <h1></h1>
            {
              <div className=" mt-5 text ">
                <h1 className="display-2 ml-5 fw-bold " style={{ color: "#223266" }}>
                  Welcome to <br />
                  Canadian Home Token
                  {/* <span className="text-gradient">Home Token</span> */}
                </h1>

              </div>
            }
            <Link onClick={() => setContactModal(true)}>
              <button type="button" className='btn'
                  style={{
                    backgroundColor: "#213166",
                    color:"white",
                    borderColor: "#213166"
                }}
              >Connect Wallet</button>
            </Link>
            {/* <Link className="flex flex-row cursor-pointer flex-wrap sm:mt-10 ">
              <img loading="lazy" width="100" height="100" src={meta} alt="meta"
                className="w-[50%] h-[50%] object-contain cursor-pointer"
                onClick={() => handleblockchain()}
              />
              <img loading="lazy" width="100" height="100" src={walet} alt="walet"
                className=" cursor-pointer"
                onClick={() => handleWalletConnect()}
              />
            </Link> */}
            {/* <Button type="submit" className="btn space-lg btn-gradient btn-shadow btn-primary " onClick={() => handleblockchain()}>Connect MetaMask</Button> */}

          </div>
        </div>
        {/* <img className="bg-shape1" src={Shape1} alt="" />
        <img className="bg-shape2" src={Shape1} alt="" /> */}
        {/* <img className="bg-shape3" src={Shape3} alt="" />
        <img className="bg-shape4" src={Shape3} alt="" /> */}

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
    </div>
  )
}

export default LandPage