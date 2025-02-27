import React, { useState } from 'react';
import { Card, Col, Button, Alert } from 'react-bootstrap';

const Product = ({ name, img, price, quantity, description, buyProduct }) => {
    const [message, setMessage] = useState('');
    const [likeCount, setLikeCount] = useState(0);  // To track the number of likes

    // Define a default "sold out" image
    const soldOutImage = '/images/sold_out.png'; 

    const handlePurchase = () => {
        if (quantity > 0) {
            buyProduct();  // Call the function to decrease quantity
            setMessage("You have purchased this product");
            setTimeout(() => setMessage(''), 2000);
        }
    };

    const handleLike = () => {
        setLikeCount(1); // Set like count to 1 when liked
    };

    const handleDislike = () => {
        setLikeCount(0); // Set like count to 0 when disliked
    };

    const imageToDisplay = quantity === 0 ? soldOutImage : img;

    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={imageToDisplay} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>Quantity left: {quantity}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>
                        {likeCount === 1 } Likes: {likeCount}
                    </Card.Text>
 
                    {/* Purchase Button */}
                    <Button onClick={handlePurchase} disabled={quantity === 0} className="me-2">
                        Buy Product
                    </Button>

                    {/* Like Button */}
                    <Button variant={likeCount === 1 ? "danger" : "success"} onClick={handleLike} disabled={likeCount === 1}>
                        Like
                    </Button>

                    {/* Dislike Button */}
                    <Button variant={likeCount === 1 ? "success" : "danger"} onClick={handleDislike} disabled={likeCount === 0}>
                        Dislike
                    </Button>
                   
                    {/* Confirmation Message */}
                    {message && <Alert variant="success" className="mt-2">{message}</Alert>}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;