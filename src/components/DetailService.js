import React  from 'react'
import { Link, Route } from 'react-router-dom'
import '../css/DetailService.css'
import service_ic01 from '../assets/images/service_ic01.png'
import service_ic02 from '../assets/images/service_ic02.png'
import school from '../assets/images/school.png'
import hospital2 from '../assets/images/hospital2.png'
import restaurant from '../assets/images/restaurant.png'
import service_ic05 from '../assets/images/service_ic05.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import top from '../assets/images/sub_visual07.jpg'


const DetailService = () => {
    return (
    <>
        <Navbar />
        <img src={top} className="top_img" alt="top"/>
        <span className="top_title">Main Service</span>
    <section className="service">
        <div className="con">
                <Link to="/DetailService/Home">
                <div className="d_img">
                    <span className="hov">
                        <img src={service_ic01}  className="D_icon" alt="service_ic01"/>
                        <div className="d_introduce">
                            <span className="d_intro"></span>
                                <strong>주거시설</strong>
                                <br/>
                                바로가기 +  
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
            <Link to="/DetailService/Public">
                <div className="d_img2">
                    <span className="hov">
                        <img src={service_ic02} className="D_icon" alt="service_ic02"/>
                        <div className="d_introduce">
                            <span className="d_intro"></span>
                                <strong>공공시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
            <Link to="DetailService/Education">
                <div className="d_img3">
                    <span className="hov">
                        <img src={school} className="D_icon" alt="school"/>
                        <div className="d_introduce">
                            <span className="d_intro"></span>
                                <strong>교육시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
            <Link to="/DetailService/Medical">
                <div className="d_img4">
                    <span className="hov">
                        <img src={hospital2} className="D_icon" alt="hospital2"/>
                        <div className="d_introduce">
                            <span className="d_intro"></span>
                                <strong>의료시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
        <Link to="/DetailService/Food"> 
                <div className="d_img5">
                    <span className="hov">
                        <img src={restaurant} className="D_icon" alt="restauran"/>
                        <div className="d_introduce">
                            <span className="d_intro"></span>
                                <strong>요식업</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link> 
        </div>
        <div className="con">
            <Link to="#" onClick={()=>{alert("준비중입니다")}}> 
                <div className="d_img6">
                    <span className="hov">
                        <img src={service_ic05} className="D_icon" alt="service_ic05"/>
                        <div className="d_introduce">
                            <span className="d_intro"></span>
                                <strong>프리미엄</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
    </section>
    <Footer />
    </>
    )
}

export default DetailService
