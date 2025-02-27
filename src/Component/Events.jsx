import React, { useEffect, useState } from "react";
import { getallEvents, editEvent, addEvent, deleteEvent } from "../services/api";
import styled from "styled-components";
import { Container, Button, Form, Card, Row, Col } from "react-bootstrap";

// Styles CSS avec styled-components
const StyledContainer = styled(Container)`
    margin-top: 20px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
    margin: 5px;
    transition: 0.3s;
    
    &:hover {
        opacity: 0.8;
    }
`;

const EventCard = styled(Card)`
    margin-bottom: 15px;
    transition: transform 0.2s;
    
    &:hover {
        transform: scale(1.02);
    }
`;

const Events = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [newEvent, setNewEvent] = useState({ name: "", date: "" });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const response = await getallEvents();
        setEvents(response?.data || []);
    };

    const handleAddEvent = async () => {
        if (!newEvent.name || !newEvent.date) return;
        await addEvent(newEvent);
        setNewEvent({ name: "", date: "" });
        fetchEvents();
    };

    const handleDeleteEvent = async (id) => {
        await deleteEvent(id);
        fetchEvents();
    };

    const handleEditEvent = async (id) => {
        const eventToEdit = events.find(event => event.id === id);
        setEditingEvent(eventToEdit);
    };

    const handleUpdateEvent = async () => {
        await editEvent(editingEvent.id, editingEvent);
        setEditingEvent(null);
        fetchEvents();
    };

    return (
        <StyledContainer>
            <h2 className="text-center mb-4">📅 Liste des événements</h2>

            {/* Formulaire d'ajout d'événement */}
            <Row className="mb-4">
                <Col md={6} className="mx-auto">
                    <h4 className="text-center">Ajouter un événement</h4>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nom de l'événement</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nom"
                                value={newEvent.name}
                                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={newEvent.date}
                                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                            />
                        </Form.Group>
                        <StyledButton variant="primary" onClick={handleAddEvent}>
                            ➕ Ajouter
                        </StyledButton>
                    </Form>
                </Col>
            </Row>

            {/* Formulaire de mise à jour */}
            {editingEvent && (
                <Row className="mb-4">
                    <Col md={6} className="mx-auto">
                        <h4 className="text-center">Modifier l'événement</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nom de l'événement</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editingEvent.name}
                                    onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={editingEvent.date}
                                    onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                                />
                            </Form.Group>
                            <StyledButton variant="success" onClick={handleUpdateEvent}>
                                ✅ Mettre à jour
                            </StyledButton>
                            <StyledButton variant="secondary" onClick={() => setEditingEvent(null)}>
                                ❌ Annuler
                            </StyledButton>
                        </Form>
                    </Col>
                </Row>
            )}

            {/* Liste des événements */}
            <Row>
                {events.map((event) => (
                    <Col md={4} key={event.id}>
                        <EventCard>
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Text>📅 {event.date}</Card.Text>
                                <StyledButton variant="warning" onClick={() => handleEditEvent(event.id)}>
                                    ✏️ Modifier
                                </StyledButton>
                                <StyledButton variant="danger" onClick={() => handleDeleteEvent(event.id)}>
                                    🗑️ Supprimer
                                </StyledButton>
                            </Card.Body>
                        </EventCard>
                    </Col>
                ))}
            </Row>
        </StyledContainer>
    );
};

export default Events;
