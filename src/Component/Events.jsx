import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Event from "./Event";  

import eventsData from "../data/events.json";  

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
   
    setEvents(eventsData);
  }, []);

  return (
    <Container>
      <Row>
        {events.map((event, index) => (
          <Col key={index}>
            <Event
              name={event.name}  
              
              nbTickets={event.nbTickets}
              nbParticipants={event.nbParticipants}
              img={event.img}  
              price={event.price}  
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Events;
