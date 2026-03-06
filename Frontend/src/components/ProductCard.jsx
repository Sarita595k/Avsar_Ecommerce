import { useEffect } from "react";
import { Link } from "react-router-dom"
import { Card, Button, Row, Col, Container, Alert, Spinner } from "react-bootstrap"; // Added Alert & Spinner
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Actions/productActions";

const ProductCard = () => {
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <Container>
            <h1 className="my-4">Products</h1>

            {/* 1. Show Error Alert if error exists */}
            {error && (
                <Alert variant="danger" className="text-center">
                    <strong>Error: </strong> {error}
                </Alert>
            )}

            {/* 2. Show a proper Spinner while loading */}
            {loading ? (
                <div className="d-flex justify-content-center my-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <Row>
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                                <Card border="light" className="shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={product.images[0]?.url}
                                        alt={product.name}
                                    />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text className="fw-bold">
                                            ₹{product.price}
                                        </Card.Text>
                                        <Button
                                            as={Link}
                                            to={`/product/${product._id}`}
                                            variant="outline-primary"
                                            size="sm"
                                        >
                                            View Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        !error && <p className="text-center">No products found.</p>
                    )}
                </Row>
            )}
        </Container>
    );
};

export default ProductCard;