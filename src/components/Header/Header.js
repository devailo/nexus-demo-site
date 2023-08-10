import "./Header.css"

import Logo from '../../images/nexus.png'

export const Header = ({handleLinkClick}) => {
    return (
        <header className="header">
            <nav className="navi">
                <div className="logo">
                    <img src={Logo} alt="nexus logo" />
                </div>
                <div className="buttons">
                    <button onClick={() => handleLinkClick('laptops')}>Laptops</button>
                    <button onClick={() => handleLinkClick('phones')}>Phones</button>
                    <button onClick={() => handleLinkClick('tablets')}>Tablets</button>
                </div>
            </nav>
        </header>
    )
}