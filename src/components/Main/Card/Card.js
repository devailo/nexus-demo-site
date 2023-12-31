import { useState } from "react";
import "./Card.css"

export const Card = ({
    _id,
    imageUrl,
    brand,
    model,
    description,
    price,
    discounted,
    rating
}) => {

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star">&#9733;</span>);
        }

        if (hasHalfStar) {
            stars.push(<span key="half" className="half-star">&#9734;</span>);
        }

        while (stars.length < 5) {
            stars.push(<span key={stars.length} className="empty-star">&#9734;</span>);
        }

        return stars;
    };


    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className="card">
            <div className="img-container">
                <img src={imageUrl} alt={brand} />
            </div>
            <div className="card-info">
                <div className="card-info-text">
                    <h2>{brand} {model}</h2>
                    <p>{description}</p>
                </div>
                <div className="star-rating">{renderStars()}</div>
                <div className="card-info-buy">
                    {discounted ? (
                        <>
                            <h3 className="price">{price} BGN</h3>
                            <h3 className="final-price">{price * 0.8} BGN</h3>
                        </>
                    ) : (
                        <h3 className="final-price">{price} BGN</h3>
                    )}
                    <button className="cart-button" onClick={() => setIsOpen(true)}>Add to cart</button>
                </div>
            </div>
            {isOpen && (<>
                <div id="page-mask">

                    <div className="popup">
                        <p>{brand} {model} added to cart!</p>
                        <span className="pop-button" onClick={() => setIsOpen(false)}>OK</span>
                    </div>
                </div>
            </>
            )}

        </div>
    )
}