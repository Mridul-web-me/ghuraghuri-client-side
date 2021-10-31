import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import Destinations from './Destinations/Destinations'
import Extra from './About/About'
import PopularDestination from './PopularDestination/PopularDestination'
import Subscribe from './Subscribe/Subscribe'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularDestination></PopularDestination>
            <Subscribe></Subscribe>
            <Destinations></Destinations>
            <About></About>

        </div>
    )
}

export default Home
