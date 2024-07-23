import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../reducer/store';
import prf from '../../assets/images/prf.png';
import Icon9 from '../../assets/images/icons/icon9.svg';
import Icon10 from '../../assets/images/icons/icon10.svg';
import Icon11 from '../../assets/images/icons/icon11.svg';
import Icon12 from '../../assets/images/icons/icon12.svg';
import log from '../../assets/images/log.png';
import HO from '../../assets/images/ho.png';
import Shape1 from '../../assets/images/home-banner/shape1.png';

const datas = [
	{ image: HO, title: 'Competitive ', desc: "A Start Of A New Era In Property Management" },
	// { image: Icon10, title: 'Support', desc: "CHT explore tokenization in financial systems" },
	// { image: Icon11, title: 'Fast ', desc: "CHT allow investments into virtual assets in 2024" },
	// { image: Icon12, title: 'Security', desc: "CHT succeeds in blockchain equity tokenization trial" }
];

function RecentNews() {
    const { blogs: data, status } = useAppSelector((state) => state.blogdb);
    const PF = "http://localhost:5000/imges/";
    return (
        <>
            {datas.map((item, ind, arr) => (
                <div className="dz-card style-1 blog-half m-b30" key={ind}>
                    {/* {arr.length - 2 >= ind ? ( */}
                        <>
                            <div className="dz-media">
                                <Link to={""}><img src={item.image} alt="" /></Link>
                                <ul className="dz-badge-list">
                                    <li><Link to={"#"} className="dz-badge">20-11-2024</Link></li>
                                </ul>
                                <Link to={""} className="btn btn-secondary">Read More</Link>
                            </div>
                            <div className="dz-info">
                                <div className="dz-meta">
                                    <ul>
                                        <li className="post-author">
                                            <Link to={"#"}>
                                                <img src={Shape1} alt="" className="me-2" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                        <br/>
                                        {/* <li className="post-date"><Link > {new Date(item.createdAt).toDateString()}</Link></li> */}
                                    </ul>
                                </div>
                                <h4 className="dz-title"><Link to={""}>{item.title}</Link></h4>
                                {/* <p className="m-b0">{item.desc}</p> */}
                                {/* <p className="m-b0">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute.</p> */}
                                <p className="post-date">21-02-2023</p>
                            </div>
                        </>
                    {/* // ) : (
                    //     <>
                    //     </>
                    // )} */}

                </div>
            ))}
        </>
    )
}
export default RecentNews;