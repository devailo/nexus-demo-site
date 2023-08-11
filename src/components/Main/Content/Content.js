import "./Content.css"

export const Content = ({ products, categoryName, onSortChange }) => {

    const handleOptionChange = (event) => {
        const selectedSortOption = event.target.value
        onSortChange(selectedSortOption)
    }

    return (
        <div className="content-header">
            <p className="counter">{products.length} of {products.length} products</p>
            <p>Take a look of our selection of {categoryName}</p>
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