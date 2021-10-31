import React from 'react'
import './Destination.css'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Destination = ({ destination }) => {
    const { _id, name, imgUrl, location, price, review, duration } = destination;
    return (
        <div className="destination">
            <Col>
                <Card>
                    <Card.Img variant="top" src={imgUrl} />
                    <Card.Body>
                        <div className="body1">
                            {/* <Link to="/description">{name}</Link> */}
                            <div className="h3">{name}</div>
                            <Card.Text>{location}</Card.Text>
                            <Card.Text>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                ( {review} Review )</Card.Text>
                        </div>
                        <div className="body2">
                            <div className="price">${price}</div>
                            <Card.Text><i class="far fa-clock"></i> {duration}</Card.Text>
                        </div>

                    </Card.Body>
                    <Link to={`/description/${_id}`}>
                        <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                    </Link>
                </Card>
            </Col>
        </div>
    )
}

export default Destination;
