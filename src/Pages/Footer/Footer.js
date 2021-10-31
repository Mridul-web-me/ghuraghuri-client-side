import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import img1 from '../../img/PopularDestination/card1.jpg'
import img2 from '../../img/PopularDestination/card2.jpg'
import img3 from '../../img/PopularDestination/card3.jpg'
import img4 from '../../img/PopularDestination/card4.jpg'
import img5 from '../../img/PopularDestination/card5.jpg'
import img6 from '../../img/PopularDestination/card6.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="address">
                            <Link className="navbar-brand" to="/home">
                                <i className="far fa-compass"></i>
                                Ghura<span>Ghuri</span>
                            </Link>
                            <p><i class="fas fa-map-marker-alt"></i>
                                Level-4, 06,  Parimal Tower, N.S Road, Kushtia
                            </p>

                            <p>
                                <i class="fas fa-phone-alt"></i>
                                +880 1312 812128
                            </p>
                            <p><i class="fas fa-envelope"></i>
                                contact@ghuraghuri.com
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-white">Company</h2>
                        <div className="companyLink">
                            <Link to="/">Pricing</Link>
                            <Link to="/">About</Link>
                            <Link to="/">Gallery</Link>
                            <Link to="/">Contact</Link>
                        </div>
                    </div>
                    <div className="col-md-3 popular">
                        <h2 className="text-white">Popular Destination</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <Link to="/destination">Indonesia</Link>
                                <Link to="/destination">America</Link>
                                <Link to="/destination">India</Link>
                                <Link to="/destination">Switzerland</Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/destination">Italy</Link>
                                <Link to="/destination">Canada</Link>
                                <Link to="/destination">Franch</Link>
                                <Link to="/destination">England</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-white gallery">Instagram</h2>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                    <img className="img-fluid" src={img1} class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img className="img-fluid" src={img2} class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img className="img-fluid" src={img3} class=" card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img className="img-fluid" src={img4} class=" card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img className="img-fluid" src={img5} class=" card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img className="img-fluid" src={img6} class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <p className="text-white">Copyright ©2021 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
