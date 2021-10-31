import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';
import './Destination.css'

const Destinations = () => {
    const [destinations, setDestination] = useState([]);
    useEffect(() => {
        fetch('https://agile-falls-12141.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setDestination(data));
    }, [])
    return (
        <div className="destinations">
            <div className="container">
                <div className="destinations-content">
                    <h1>Popular places</h1>
                    <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        destinations.map(destination => <Destination
                            key={destination._id}
                            destination={destination}
                        ></Destination>)
                    }
                </Row>
                <button>More Places</button>
            </div>
        </div>
    )
}

export default Destinations;
