import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Event({ name, description, nbTickets, nbParticipants, img, price }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/images/${img}`} />  
      <Card.Body>
        <Card.Title>{name}</Card.Title> 
        <Card.Text>price :{price} DT</Card.Text>
        <Card.Text>Number of tickets : {nbTickets}</Card.Text>
        <Card.Text>Number of participations : {nbParticipants}</Card.Text>
        <Button variant="primary">Book an event</Button>  
      </Card.Body>
    </Card>
  );
}

export default Event;
