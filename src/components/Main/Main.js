import "./Main.css"
import { Card } from "./Card/Card"


export const Main = ({ products, categoryName }) => {

    // const brands = Object.values(products.reduce(function (allBrands, item) {
    //     let brand = item.brand
    //     allBrands[brand] = brand;
    //     return allBrands;
    // }, {}))

    const brands = Object.entries(
        products.reduce((countMap, { brand }) => {
            countMap[brand] = (countMap[brand] || 0) + 1;
            return countMap;
        }, {})
    );

    const prices = products.map(object => {
        return object.price
    })

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
        <section className="main-container">
            <div className="filter-container">
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
            </div>
            <div className="page-container">
                <div className="main-header">
                    <p className="counter">{products.length} of {products.length} products</p>
                    <p>Take a look of our selection of {categoryName}</p>
                    <div className="sort-container">
                        <p>Sort by:</p>
                        <select>
                            <option value="name">Alphabetical a-z</option>
                            <option value="name-reverse">Alphabetical z-a</option>
                            <option value="price">Price ascending</option>
                            <option value="price-reverse">Price descending</option>
                        </select>
                    </div>
                </div>
                <div className="card-grid">
                    {products.map((product, i) => <Card {...product} key={i} />)}
                </div>
            </div>
        </section>
    )
}