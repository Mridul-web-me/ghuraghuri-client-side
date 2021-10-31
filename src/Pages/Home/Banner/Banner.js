import React from 'react';
import './Banner.css'
import banner1 from '../../../img/banner/banner1.jpg';
import banner2 from '../../../img/banner/banner2.jpg';
import banner3 from '../../../img/banner/banner3.jpg';

const Banner = () => {
    return (

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Australia</h1>
                        <button className="banner-btn">Explore Now</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>St. Martin</h1>
                        <button className="banner-btn">Explore Now</button>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Nepal </h1>
                        <button className="banner-btn">Explore Now</button>

                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner;
