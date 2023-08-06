import { Link } from "react-router-dom"
import Logo from '../../images/nexus.png'

export const Header = () => {
    return (
        <header>
            <nav className="navi">
                <div className="logo">
                    <img src={Logo} alt="nexus logo" />
                </div>
                <div className="buttons">
                    <Link to="/">Laptops</Link>
                    <Link to="/phones">Phones</Link>
                    <Link to="/tablets">Tablets</Link>
                </div>
            </nav>
        </header>
    )
}