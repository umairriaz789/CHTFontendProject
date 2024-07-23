import React from 'react';
import { Link } from 'react-router-dom';
import Shape1 from './../assets/images/home-banner/shape1.png';
import Shape3 from './../assets/images/home-banner/shape3.png';
import { useAppSelector } from '../reducer/store';
// import { propertyLLCDelete } from "../slices/llcSlice";

// import PageLayout from './../layouts/PageLayout';
import BlogSidebar from './../components/Blog/BlogSidebar';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
//images
import blog1 from './../assets/images/blog/pic1.jpg';
import blog2 from './../assets/images/blog/pic2.jpg';
import blog3 from './../assets/images/blog/pic3.jpg';
import blog4 from './../assets/images/blog/pic4.jpg';
import avatar1 from './../assets/images/avatar/avatar1.jpg';
import avatar2 from './../assets/images/avatar/avatar2.jpg';
import avatar3 from './../assets/images/avatar/avatar3.jpg';

const blocardList = [
    { image: blog3, image2: avatar3, title: 'How to Buy CHT.' },
    { image: blog1, image2: avatar1, title: 'The Ultimate Guide to Real Estate Tokenization in 2024' },
    { image: blog2, image2: avatar2, title: 'Real Estate Tokenization Explained' },
];


function BlogList() {
    const { blogs: data, status } = useAppSelector((state) => state.blogdb);
    const PF = "http://localhost:5000/imges/";

    return (
        <>
            <Header />
            <div className="page-content">
                <div className="dz-bnr-inr style-1 text-center">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1 style={{ color: "#213166" }}>Blogs</h1>
                            {/* {
                                <p className="text">Get on the property ladder today</p>
                            } */}
                            {/* <nav className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                                    <li className="breadcrumb-item active">Blogs</li>
                                </ul>
                            </nav> */}
                        </div>
                    </div>
                    {/* <img className="bg-shape1" src={Shape1} alt="" /> */}
                    {/* <img className="bg-shape2" src={Shape1} alt="" /> */}
                    {/* <img className="bg-shape3" src={Shape3} alt="" />
                    <img className="bg-shape4" src={Shape3} alt="" /> */}
                </div>
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-12 col-lg-4">
                                <BlogSidebar />
                            </div>
                            <div className="col-xl-12 col-lg-8">
                                <div className="row">
                                    {blocardList.map((item, index) => (
                                        <div className="col-lg-12 m-b40" key={index}>
                                            <div className="dz-card style-1 blog-half">
                                                <div className="dz-media">
                                                    {/* <Link to={"/blog-details/" + item._id}><img src={PF + item.photo} alt="" /></Link> */}
                                                    <Link ><img src={item.image} alt="" /></Link>
                                                    <ul className="dz-badge-list">
                                                        {/* <li><Link to={"#"} className="dz-badge">{new Date(item.createdAt).toDateString()}</Link></li> */}
                                                        <li><Link to={"#"} className="dz-badge">02-12-2024</Link></li>
                                                    </ul>
                                                    <Link to={""} className="btn btn-secondary"
                                                    	style={{
                                                            backgroundColor: "#213166",
                                                            color: "white",
                                                            // border: "#213166"
                                                            borderColor: "#213166"
                                                        }}>Read More</Link>
                                                    {/* <Link to={"/blog-details/" + item._id} className="btn btn-secondary">Read More</Link> */}
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            <li className="post-author">
                                                                <Link>
                                                                    {/* <Link to={"/blog-details/" + item._id}> */}
                                                                    {/* <img src={PF + item.photo} alt="" className="me-2" /> */}
                                                                    <img src={item.image2} alt="" className="me-2" />
                                                                    <span
                                                                    	style={{
                                                                            color: "#213166"
                                                                        }}>{item.name}</span>
                                                                </Link>
                                                            </li>
                                                            {/* <li className="post-date"><Link to={"#"}>{new Date(item.createdAt).toDateString()}</Link></li> */}
                                                            <li className="post-date"><Link to={"#"}
                                                            style={{
                                                                color: "#213166"
                                                            }}>23-08-2024</Link></li>
                                                        </ul>
                                                    </div>
                                                    {/* <h4 className="dz-title"><Link to={"/blog-details/" + item._id}>{item.title}</Link></h4> */}
                                                    <h4 className="dz-title"
                                                    style={{
                                                        color: "#213166"
                                                    }}><Link to={""}>{item.title}</Link></h4>
                                                    {/* <p className="m-b0">{item.desc}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                                        <nav aria-label="Blog Pagination">
                                            <ul className="pagination style-1 text-center">
                                                <li className="page-item"><Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link active">1</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link></li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default BlogList;