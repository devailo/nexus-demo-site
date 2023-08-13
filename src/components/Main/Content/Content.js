import "./Content.css"
import "./Content-responsive.css"

export const Content = ({ products, filteredProducts, shownNumber, shownProducts, categoryName, onSortChange }) => {

    const handleOptionChange = (event) => {
        const selectedSortOption = event.target.value
        onSortChange(selectedSortOption)
    }

    return (
        <div className="content-header">
            <p className="counter">{shownNumber ? shownProducts : filteredProducts.length} of {products.length} products</p>
            <div className="category-name">
                <p>Take a look at our selection of</p>
                <h2> {categoryName}</h2>
            </div>
            <div className="sort-container">
                <label htmlFor="sortOptions">Sort by:</label>
                <select id="sortOptions" onChange={handleOptionChange}>
                    <option value="name">Alphabetical a-z</option>
                    <option value="name-reverse">Alphabetical z-a</option>
                    <option value="price">Price ascending</option>
                    <option value="price-reverse">Price descending</option>
                </select>
            </div>
        </div>
    )
}