import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="/">Avsar E-Commerce</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Shop</Nav.Link>
                        <Nav.Link href="#link">Products</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                        <Nav.Link href="#link">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;