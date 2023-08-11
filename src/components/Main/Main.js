import "./Main.css"

import { useState } from "react"

import { Card } from "./Card/Card"
import { Filters } from "./Filters/Filters"
import { Content } from "./Content/Content"

import { sortProducts } from "../../utils/sortingUtil"


export const Main = ({ allCategories, activeCategory}) => {


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

  

    console.log(products);

    return (
        <section className="main-container">
            <div className="filter-container">
                <Filters brands={brands} prices={prices} />
            </div>
            <div className="content-container">
                <Content products={products} categoryName={activeCategory} onSortChange={handleSortChange} />
                <div className="card-grid">
                    {products.map((product) => <Card {...product} key={product._id} />)}
                </div>
            </div>
        </section>
    )
}