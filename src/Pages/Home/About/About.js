import React from 'react'
import './About.css'
import img1 from '../../../img/extra/1.svg'
import img2 from '../../../img/extra/2.svg'
import img3 from '../../../img/extra/3.svg'
import img4 from '../../../img/extra/banner1.jpg'
import img5 from '../../../img/extra/banner2.jpg'
import img6 from '../../../img/extra/banner3.jpg'

const Extra = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-content">
                    <h1 className="text-start my-4">Our Story</h1>
                    <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
                    <p> Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={img1} alt="" w-40 />
                        <h4>Comfortable Journey</h4>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={img2} alt="" />
                        <h4>Luxuries Hotel</h4>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={img3} alt="" />
                        <h4>Travel Guide</h4>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                </div>

                <h2 className="recent-trips">Recent Trips</h2>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={img4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Journeys Are Best Measured In New Friends</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Journeys Are Best Measured In New Friends</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Journeys Are Best Measured In New Friends</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extra
