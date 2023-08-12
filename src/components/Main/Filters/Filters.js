// import { useState } from "react";
import "./Filters.css"

export const Filters = ({
    brands,
    prices,
    selectedBrands,
    handleBrandCheckboxChange,
    selectedPrices,
    handlePriceCheckboxChange,
    selectedRatings,
    handleRatingCheckboxChange
}) => {

    function generateAdjustedPrices(prices) {
        if (prices.length === 0) {
            return [];
        }

        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        const firstValue = Math.floor((minPrice - 1) / 500) * 500;
        const lastValue = Math.floor((maxPrice - 1) / 500) * 500;

        const adjustedPrices = [];
        for (let price = firstValue; price <= lastValue; price += 500) {
            adjustedPrices.push(price);
        }

        return adjustedPrices;
    }

    const filterPrices = generateAdjustedPrices(prices);

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked)
    }

    console.log(checked);

    return (
        <div className="filter-content">
            <div className="filter-group">
                <h5>Brand</h5>
                <ul>
                    {brands.map((brand, i) =>
                        <li className="form-check" key={i}>
                            <input type="checkbox"
                                name={brand[0]}
                                id={brand[0]}
                                checked={selectedBrands.includes(brand[0])}
                                onChange={() => handleBrandCheckboxChange(brand[0])}
                            />
                            <label htmlFor={brand[0]}>{brand[0]} ({brand[1]})</label>
                        </li>
                    )}
                </ul>
            </div>
            <div className="filter-group">
                <h5>Price above</h5>
                <ul>
                    {filterPrices.map((price, i) =>
                        <li className="form-check" key={i}>
                            <input type="checkbox"
                                name={price}
                                id={price}
                                checked={selectedPrices.includes(price)}
                                onChange={() => handlePriceCheckboxChange(price)}
                            />
                            <label htmlFor={price}>{price} BGN</label>
                        </li>)}
                </ul>
            </div>
            <div className="filter-group">
                <h5>Rating above</h5>
                <ul>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <li className="form-check" key={rating}>
                            <input type="checkbox"
                                name={rating + " stars"}
                                id={rating + " stars"} 
                                checked={selectedRatings.includes(rating)}
                                onChange={() => handleRatingCheckboxChange(rating)}
                                />
                            <label htmlFor={rating + " stars"}>{rating + " stars"}</label>
                        </li>
                    ))}
                    {/* <li className="form-check">
                        <input type="checkbox" name="5 stars" id="5 stars" />
                        <label htmlFor="5 stars">5 stars</label>
                    </li>
                    <li className="form-check">
                        <input type="checkbox" name="4 stars" id="4 stars" />
                        <label htmlFor="4 stars">4 stars</label>
                    </li>
                    <li className="form-check">
                        <input type="checkbox" name="3 stars" id="3 stars" />
                        <label htmlFor="3 stars">3 stars</label>
                    </li>
                    <li className="form-check">
                        <input type="checkbox" name="2 stars" id="2 stars" />
                        <label htmlFor="2 stars">2 stars</label>
                    </li >
                    <li className="form-check">
                        <input type="checkbox" name="1 stars" id="1 stars" />
                        <label htmlFor="1 stars">1 stars</label>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}