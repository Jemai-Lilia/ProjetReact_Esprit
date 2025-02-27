import React, { useState, useEffect } from 'react';
import { Row, Alert } from 'react-bootstrap';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        // Charger les produits depuis le fichier JSON
        fetch('/src/data/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Erreur lors du chargement des produits:", error));

        // Faire disparaître le message de bienvenue après 3 secondes
        setTimeout(() => setShowWelcome(false), 3000);
    }, []);

    // Fonction pour acheter un produit
    const buyProduct = (index) => {
        setProducts((prevProducts) =>
            prevProducts.map((product, i) =>
                i === index && product.quantity > 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    // Fonction pour liker/disliker un produit
    const toggleLike = (index) => {
        setProducts((prevProducts) =>
            prevProducts.map((product, i) =>
                i === index ? { ...product, like: !product.like } : product
            )
        );
    };

    return (
        <> 
            {showWelcome && <Alert variant="success">Hey welcome to our Products Store</Alert>}
            <Row>
                {products.map((product, index) => (
                    <Product
                        key={index}
                        {...product}
                        buyProduct={() => buyProduct(index)}
                        toggleLike={() => toggleLike(index)}
                    />
                ))}
            </Row>
        </>
    );
};

export default Products;