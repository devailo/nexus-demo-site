import "./Footer.css"
import "./Footer-responsive.css"

import { Link } from "react-router-dom"
import Logo from '../../images/nexus.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <a href="/">
                    <img src={Logo} alt="nexus logo" />
                </a>

            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <ul>
                        <li><Link to="#">About us</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Deliveries</Link></li>
                        <li><Link to="#">Warranties</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li><Link to="#">Terms and conditions</Link></li>
                        <li><Link to="#">GDPR</Link></li>
                        <li><Link to="#">Become a partner</Link></li>
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