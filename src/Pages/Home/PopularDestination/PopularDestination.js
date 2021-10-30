import React from 'react'
import './PopularDestination.css'
import card1 from '../../../img/PopularDestination/card1.jpg';
import card2 from '../../../img/PopularDestination/card2.jpg';
import card3 from '../../../img/PopularDestination/card3.jpg';
import card4 from '../../../img/PopularDestination/card4.jpg';
import card5 from '../../../img/PopularDestination/card5.jpg';
import card6 from '../../../img/PopularDestination/card6.jpg';

const PopularDestination = () => {
    return (
        <div className="popularDestination">
            <div className="container">
                <div className="container-text my-5">
                    <h2>Popular Destination</h2>
                    <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={card1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Italy</h5>
                                <button className="card-btn">04 Places</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={card2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Brazil</h5>
                                <button className="card-btn">07 Places</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={card3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">America</h5>
                                <button className="card-btn">03 Places</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={card4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Nepal</h5>
                                <button className="card-btn">05 Places</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={card5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Maldives</h5>
                                <button className="card-btn">02 Places</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={card6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Indonesia</h5>
                                <button className="card-btn">05 Places</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularDestination
