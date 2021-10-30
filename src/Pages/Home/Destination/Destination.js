import React, { useEffect } from 'react'

const Destination = () => {
    // const [destination, setDestination] = useState([]);
    useEffect(() => {
        fetch('https://agile-falls-12141.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div className="destination">

        </div>
    )
}

export default Destination
