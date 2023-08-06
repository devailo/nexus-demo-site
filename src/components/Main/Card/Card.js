
import "../../Main/Main.css"

export const Card = ({
    _id,
    imageUrl,
    brand,
    model,
    description,
    price,
    rating
}) => {
    return (
        <div className="card">
            <div className="card-info">
                <h1>{brand} {model}</h1>
                <h2>{price}</h2>
                <p>{description}</p>
                <div className="rating">{rating}</div>
                
                <button className="cart-button">Add to cart</button>
            </div>
            <img src={imageUrl} alt={brand} />
        </div>
    )
}