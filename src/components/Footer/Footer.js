import { Link } from "react-router-dom"
import Logo from '../../images/nexus.png'

export const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-logo">
                <img src={Logo} alt="nexus logo" />

            </div>
            <div class="footer-links">
                <div class="footer-column">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Laptops</Link></li>
                        <li><Link to="/phones">Phones</Link></li>
                        <li><Link to="/tablets">Tablets</Link></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <ul>
                        <li><Link to="#">About us</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Terms and conditions</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div class="footer-social">
                <h4>Follow us on</h4>
                <div class="social-links">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
        </footer>
    )
}