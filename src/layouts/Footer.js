import React from 'react';
import { Link } from 'react-router-dom';

//images
import shape1 from './../assets/images/home-banner/shape1.png';
import bgimage from './../assets/images/background/bg1.jpg';
import logowhite from './../assets/images/logos.png';
import flags from './../assets/images/footer/world-map-with-flags1.png';
import map from './../assets/images/footer/map.png';
import log from './../assets/images/log.png';
import logoCHT from './../assets/images/logoCHT.png';

function Footer() {
    return (
        <>
            <footer className="site-footer style-1" id="footer">
                {/* <img className="bg-sh" width="82" height="82" src={logoCHT} alt="" /> */}
                {/* <img className="bg-shape1" src={shape1} alt="" /> */}
                <div className="footer-top background-luminosity">
                    {/* <div className="footer-top background-luminosity" style={{ backgroundImage: "url(" + bgimage + ")" }}> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6" >
                                {/* <div className="widget widget_services"> */}
                                <div>
                                    <h4 className="title">Links</h4>
                                    <ul>
                                        <li><Link to={"/"} style={{ color: "white" }}>About Us</Link></li>
                                        <li><Link to={"/"} style={{ color: "white" }}>Terms of Service</Link></li>
                                        {/* <li><Link to={"/"}>Our Blogs</Link></li>
                                        <li><Link >List Your Property</Link></li> */}
                                        <li><Link to={"/"} style={{ color: "white" }}>Privacy Policy</Link></li>
                                        {/* <li><Link to={"/"}>FAQs</Link></li> */}
                                        <li><Link to={"/"} style={{ color: "white" }}>Contact Us</Link></li>
                                        <li><Link to={"/"} style={{ color: "white" }}>Token</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4 col-sm-12" >
                                <div className="widget">
                                    {/* <h4 className="widget-title">Locations</h4> */}
                                    <div className="clearfix">
                                        {/* <h6 className="title">Canada</h6>
                                        <p>17050-7957 Canada</p> */}
                                        <img width="302" height="302" src={map} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12 text-end">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <Link to={"/"}><img width="82" height="82" src={logoCHT} alt="" /></Link>
                                    </div>
                                    <div className="dz-social-icon transparent space-10">
                                        <ul>
                                            <li><a target="_blank" className="fab fa-linkedin"
                                                href="https://www.linkedin.com/in/canadian-home-token-0943792b2?fbclid=IwZXh0bgNhZW0
                                            CMTAAAR2-vqCwmz2MD-SCHIIGn4eUsCFXJBjWe1zLXzP4Apwg8FL_NqBS1B_k5H0_
                                            aem_AV6WkINj8odVKT5m8ymKrjuAHcpfziI96Vpf3fW7hBEkyUT3JZVmYPSqQJEXFPE
                                            WRVdUxrr-QfYhQapUbQhcDINO"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-twitter"
                                                href="https://x.com/CmarioBt"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-instagram"
                                                href="https://www.instagram.com/canadian.hometoken/?igsh=MWw2c3k1c3h2Z3Nhag%3D%3D&utm_source=qr&fbclid=IwZXh0bgNhZW0CMTAAAR1Bv5uH-EXGOPOUuzxXBjvCIXoncBb6NGFlWAKQyHB6Wb7JLIKnm3J7dEw_aem_AV5FLsjuehA_M9DENWVI5CpaSF_m7A3XPuWEEMZTU763Qg8NPyIxzyQuGSzIpjF06z986aU9VcgItnK2Y51o38Nb"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-facebook"
                                                href="https://www.facebook.com/profile.php?id=61556412777228"></a></li>
                                            <li><a target="_blank" className="fab fa-tiktok"
                                                href="https://www.tiktok.com/@.canadian.home.to?_t=8mi03olwlZm&_r=1&fbclid=IwZXh0bgNhZW0CMTAAAR0iPp1HZchcdVLliQpF9JzvVLZ7-_OLxXjpwH6Utn01QzKaGtzD_0Je0wI_aem_AV5Yz8iGxRNnKvhWPQi3OAqLefHvIERKGM7HVWncdXUdyrgFsnEkTQknmNaeDWXPpMUEHG_9SIM095pN1u7G-_V-"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="footer-bottom bg-black">
                    <div className='row'>
                        <div className="col-xl-8 dz-social-icon transparent space-10"
                        style={{
                            paddingLeft:"55px"
                        }}
                        >
                            <ul>
                                <li><a target="_blank" className="fab fa-linkedin"
                                    href="https://www.linkedin.com/in/canadian-home-token-0943792b2?fbclid=IwZXh0bgNhZW0
                                            CMTAAAR2-vqCwmz2MD-SCHIIGn4eUsCFXJBjWe1zLXzP4Apwg8FL_NqBS1B_k5H0_
                                            aem_AV6WkINj8odVKT5m8ymKrjuAHcpfziI96Vpf3fW7hBEkyUT3JZVmYPSqQJEXFPE
                                            WRVdUxrr-QfYhQapUbQhcDINO"></a></li>{" "}
                                <li><a target="_blank" className="fab fa-twitter"
                                    href="https://x.com/CmarioBt"></a></li>{" "}
                                <li><a target="_blank" className="fab fa-instagram"
                                    href="https://www.instagram.com/canadian.hometoken/?igsh=MWw2c3k1c3h2Z3Nhag%3D%3D&utm_source=qr&fbclid=IwZXh0bgNhZW0CMTAAAR1Bv5uH-EXGOPOUuzxXBjvCIXoncBb6NGFlWAKQyHB6Wb7JLIKnm3J7dEw_aem_AV5FLsjuehA_M9DENWVI5CpaSF_m7A3XPuWEEMZTU763Qg8NPyIxzyQuGSzIpjF06z986aU9VcgItnK2Y51o38Nb"></a></li>{" "}
                                <li><a target="_blank" className="fab fa-facebook"
                                    href="https://www.facebook.com/profile.php?id=61556412777228"></a></li>
                                <li><a target="_blank" className="fab fa-tiktok"
                                    href="https://www.tiktok.com/@.canadian.home.to?_t=8mi03olwlZm&_r=1&fbclid=IwZXh0bgNhZW0CMTAAAR0iPp1HZchcdVLliQpF9JzvVLZ7-_OLxXjpwH6Utn01QzKaGtzD_0Je0wI_aem_AV5Yz8iGxRNnKvhWPQi3OAqLefHvIERKGM7HVWncdXUdyrgFsnEkTQknmNaeDWXPpMUEHG_9SIM095pN1u7G-_V-"></a></li>
                            </ul>
                        </div>
                        <div className="col-xl-4 footer-logo logo-white text-end">
                            <Link 
                            style={{
                                paddingRight:"35px"
                            }}
                            to={"/"}><img width="62" height="62" src={logoCHT} alt="" /></Link>
                        </div>
                    </div>
                </div> */}
            </footer>
        </>
    )
}
export default Footer;