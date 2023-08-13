import "./Header.css"
import "./Header-responsive.css"

import Logo from '../../images/nexus.png'

export const Header = ({ onCategoryChange }) => {
    const handleCategoryClick = (category) => {
        onCategoryChange(category)
    }

    return (
        <header className="header">
            <nav className="navi">
                <div className="logo">
                    <a href="/">
                        <img src={Logo} alt="nexus logo" />
                    </a>
                </div>
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div className="buttons" id="buttons">
                    <button onClick={() => handleCategoryClick('laptops')}>Laptops</button>
                    <button onClick={() => handleCategoryClick('phones')}>Phones</button>
                    <button onClick={() => handleCategoryClick('tablets')}>Tablets</button>
                </div>
            </nav>
        </header>
    )
}