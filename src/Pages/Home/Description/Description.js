import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Description = () => {
    const { destinationId } = useParams();
    const { setDestination } = useState({});

    useEffect(() => {
        fetch(`https://agile-falls-12141.herokuapp.com/packages/${destinationId}`)
            .then(res => res.json())
            .then(data => setDestination(data));

    }, [])
    return (
        <div>
            {/* <h2>Details OF {destination.name}</h2> */}
            <p>{destinationId}</p>
            <h2>Description</h2>
        </div>
    )
}

export default Description;
