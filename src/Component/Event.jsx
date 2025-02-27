import React, { useState } from 'react';
import { Card, Col, Button, Alert } from 'react-bootstrap';

const Event = ({ name, img, price, nbTickets, nbParticipants, like, bookEvent, toggleLike }) => {
    const [message, setMessage] = useState('');

    // Define a default "sold out" image
    const soldOutImage = '/images/sold_out.png'; 

    const handleBooking = () => {
        if (nbTickets > 0) {
            bookEvent();
            setMessage("You have booked an event");
            setTimeout(() => setMessage(''), 2000);
        }
    };

    const imageToDisplay = nbTickets === 0 ? soldOutImage : img;

    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={imageToDisplay} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price : {price} </Card.Text>
                    <Card.Text>Number of tickets: {nbTickets}</Card.Text>
                    <Card.Text>Number of participants : {nbParticipants}</Card.Text>

                    {/* Bouton de réservation */}
                    <Button onClick={handleBooking} disabled={nbTickets === 0} className="me-2">
                        {"Book an event"} 
                    </Button>

                    {/* Bouton Like/Dislike */}
                    <Button variant={like ? "danger" : "success"} onClick={toggleLike}>
                        {like ? "Dislike" : "Like"}
                    </Button>

                    {/* Message de confirmation */}
                    {message && <Alert variant="success" className="mt-2">{message}</Alert>}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;
