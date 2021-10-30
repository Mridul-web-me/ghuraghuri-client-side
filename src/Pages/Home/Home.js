import React from 'react'
import Banner from './Banner/Banner'
import Destination from './Destination/Destination'
// import Banner from './Banner/Banner'
import Nav from './Nav/Nav'
import PopularDestination from './PopularDestination/PopularDestination'
import Subscribe from './Subscribe/Subscribe'

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <PopularDestination></PopularDestination>
            <Subscribe></Subscribe>
            <Destination></Destination>
        </div>
    )
}

export default Home
