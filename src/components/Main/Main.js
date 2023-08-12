import "./Main.css"

import { useState } from "react"

import { Card } from "./Card/Card"
import { Filters } from "./Filters/Filters"
import { Content } from "./Content/Content"

import { sortProducts } from "../../utils/sortingUtil"

export const Main = ({ allCategories, activeCategory }) => {

    const selectedCategoryProducts = allCategories[activeCategory]

    const brands = Object.entries(
        selectedCategoryProducts.reduce((countMap, { brand }) => {
            countMap[brand] = (countMap[brand] || 0) + 1;
            return countMap;
        }, {})
    );

    const prices = selectedCategoryProducts.map(product => {
        return product.price
    })

    const [products, setProducts] = useState(selectedCategoryProducts)

    const handleSortChange = (selectedSortOption) => {
        const sortedProducts = sortProducts(products, selectedSortOption)
        setProducts(sortedProducts)

    }

    // filtering functionality
    const [selectedBrands, setSelectedBrands] = useState([])
    const [selectedPrices, setSelectedPrices] = useState([])
    const [selectedRatings, setSelectedRatings] = useState([])

    const handleBrandCheckboxChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(selectedBrand => selectedBrand !== brand))
        } else {
            setSelectedBrands([...selectedBrands, brand])
        }
    }

    const handlePriceCheckboxChange = (price) => {
        if (selectedPrices.includes(price)) {
            setSelectedPrices(selectedPrices.filter(selectedPrice => selectedPrice !== price))
        } else {
            setSelectedPrices([...selectedPrices, price])
        }
    }

    const handleRatingCheckboxChange = (rating) => {
        if (selectedRatings.includes(rating)) {
            setSelectedRatings(selectedRatings.filter(selectedRating => selectedRating !== rating))
        } else {
            setSelectedRatings([...selectedRatings, rating])
        }
    }

    const filterProducts = (product) => {
        const brandFilter = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
        const priceFilter = selectedPrices.length === 0 || (product.discounted ? product.price * 0.8 : product.price) >= Math.min(...selectedPrices)
        const ratingFilter = selectedRatings.length === 0 || product.rating >= Math.min(...selectedRatings)

        return brandFilter && priceFilter && ratingFilter
    }

    const filteredProducts = products.filter(filterProducts)

    // show more functionality
    const defaultProductsShown = 4

    const [shownProducts, setLoadMore] = useState(defaultProductsShown)

    const handleMoreProducts = () => {
        setLoadMore(shownProducts + defaultProductsShown)
    }

    let shownNumber = false 

    if (shownProducts < filteredProducts.length) {
        shownNumber = true
    }

    return (
        <section className="main-container">
            <div className="filter-container">
                <Filters brands={brands}
                    prices={prices}
                    selectedBrands={selectedBrands}
                    handleBrandCheckboxChange={handleBrandCheckboxChange}
                    selectedPrices={selectedPrices}
                    handlePriceCheckboxChange={handlePriceCheckboxChange}
                    selectedRatings={selectedRatings}
                    handleRatingCheckboxChange={handleRatingCheckboxChange} />
            </div>
            <div className="content-container">
                <Content products={products} filteredProducts={filteredProducts} shownNumber={shownNumber} shownProducts={shownProducts} categoryName={activeCategory} onSortChange={handleSortChange} />
                <div className="card-grid">
                    {filteredProducts
                        .slice(0, shownProducts)
                        .map((product) => <Card {...product} key={product._id} />)}
                    {shownProducts < filteredProducts.length && (
                        <button className="load-more-btn" onClick={handleMoreProducts}>Load More Products</button>
                    )}
                </div>
            </div>
        </section>
    )
}