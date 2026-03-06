import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetails, clearErrors } from "../../Actions/productActions";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";

const ProductDetails = () => {
    const { id } = useParams(); // Grabs the ID from the URL
    const dispatch = useDispatch();

    const { loading, error, product } = useSelector((state) => state.productDetails);

    useEffect(() => {
        if (error) {
            alert(error); // Simple error display for now
            dispatch(clearErrors());
        }
        dispatch(productDetails(id));
    }, [dispatch, id, error]);

    return (
        <Container className="my-5">
            {loading ? (
                <Spinner animation="border" />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <Row>
                    <Col md={6}>
                        <img
                            src={product.images && product.images[0].url}
                            alt={product.name}
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6}>
                        <h2>{product.name}</h2>
                        <p>Product # {product._id}</p>
                        <hr />
                        <h4>₹{product.price}</h4>
                        <p>{product.description}</p>
                        <button className="btn btn-warning">Add to Cart</button>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default ProductDetails;