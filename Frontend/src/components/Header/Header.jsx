import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            {/* Navbar */}
            <nav className="navbar">
                <h2 className="logo">Avsar Ecom</h2>

                <ul className="nav-links">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Categories</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>

                <button className="shop-btn">Shop Now</button>
            </nav>

            {/* Hero Section */}
            <div className="hero">
                <div className="hero-text">
                    <h1>
                        Discover the Best <span>Products</span> for You
                    </h1>
                    <p>
                        Shop premium quality items at affordable prices.
                        Fast delivery & easy returns.
                    </p>

                    <button className="explore-btn">Explore Products</button>
                </div>

            </div>
        </header>
    );
};
