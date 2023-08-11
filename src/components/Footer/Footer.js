import "./Footer.css"

import { Link } from "react-router-dom"
import Logo from '../../images/nexus.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="nexus logo" />

            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Laptops</Link></li>
                        <li><Link to="/phones">Phones</Link></li>
                        <li><Link to="/tablets">Tablets</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li><Link to="#">About us</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Terms and conditions</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-social">
                <h4>Follow us on</h4>
                <div className="social-links">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
        </footer>
    )
}