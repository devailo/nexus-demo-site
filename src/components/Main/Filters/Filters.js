import "./Filters.css"

export const Filters = ({ brands, prices }) => {


    console.log(prices);

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

    return (
        <div className="filter-content">
            <div className="filter-group">
                <h5>Brand</h5>
                <ul>
                    {brands.map((brand, i) =>
                        <li className="form-check" key={i}>
                            <input type="checkbox" name={brand} id={brand} />
                            <label htmlFor={brand}>{brand[0]} ({brand[1]})</label>
                        </li>
                    )}
                </ul>
            </div>
            <div className="filter-group">
                <h5>Price above</h5>
                <ul>
                    {filterPrices.map((price, i) =>
                        <li className="form-check" key={i}>
                            <input type="checkbox" name={price} id={price} />
                            <label htmlFor={price}>{price} BGN</label>
                        </li>)}
                </ul>
            </div>
            <div className="filter-group">
                <h5>Rating above</h5>
                <ul>
                    <li className="form-check">
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
                    </li>
                </ul>
            </div>
        </div>
    )
}