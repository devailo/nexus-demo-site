import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <nav className="navi">
                <div className="logo">
                    <img src="../../images/nexus.png" alt="nexus logo" />
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