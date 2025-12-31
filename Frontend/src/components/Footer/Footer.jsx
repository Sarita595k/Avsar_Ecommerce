import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Info */}
                <div className="footer-section">
                    <h2 className="footer-logo">Avsar</h2>
                    <p>
                        Your one-stop destination for premium quality products.
                        Shop smart. Shop stylish.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Categories</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <span>🌐</span>
                        <span>📘</span>
                        <span>📸</span>
                        <span>🐦</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Avsar E-commerce. All rights reserved.</p>
            </div>
        </footer>
    );
};