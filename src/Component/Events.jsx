import React, { useState, useEffect } from 'react';
import { Row, Alert } from 'react-bootstrap';
import Event from './Event';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        // Charger les événements depuis le fichier JSON
        fetch('/src/data/events.json')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error("Erreur lors du chargement des événements:", error));

        // Faire disparaître le message de bienvenue après 3 secondes
        setTimeout(() => setShowWelcome(false), 3000);
    }, []);

    // Fonction pour réserver un événement
    const bookEvent = (index) => {
        setEvents((prevEvents) =>
            prevEvents.map((event, i) =>
                i === index && event.nbTickets > 0
                    ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
                    : event
            )
        );
    };

    // Fonction pour liker/disliker un événement
    const toggleLike = (index) => {
        setEvents((prevEvents) =>
            prevEvents.map((event, i) =>
                i === index ? { ...event, like: !event.like } : event
            )
        );
    };

    return (
        <>
            {showWelcome && <Alert variant="success">Hey welcome to Esprit Events</Alert>}
            <Row>
                {events.map((event, index) => (
                    <Event
                        key={index}
                        {...event}
                        bookEvent={() => bookEvent(index)}
                        toggleLike={() => toggleLike(index)}
                    />
                ))}
            </Row>
        </>
    );
};

export default Events;