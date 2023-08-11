import "./Header.css"

import Logo from '../../images/nexus.png'

export const Header = ({onCategoryChange}) => {
    const handleCategoryClick = (category) => {
        onCategoryChange(category)
    }
    return (
        <header className="header">
            <nav className="navi">
                <div className="logo">
                    <img src={Logo} alt="nexus logo" />
                </div>
                <div className="buttons">
                    <button onClick={() => handleCategoryClick('laptops')}>Laptops</button>
                    <button onClick={() => handleCategoryClick('phones')}>Phones</button>
                    <button onClick={() => handleCategoryClick('tablets')}>Tablets</button>
                </div>
            </nav>
        </header>
    )
}