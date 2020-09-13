import React from 'react'
import { useStateValue } from './StateProvider'

function Product(props) {
    const [, dispatch] = useStateValue();
    var { id, price, image, ratings, title } = props
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {id, title, image, price, ratings }
        });
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">
                    {Array(ratings).fill().map((_) => (<span role='img' aria-label="Star">&#11088;</span>))}
                </p>
            </div>

            <img src={image} alt="product-imag" />
            <button onClick={addToBasket}>Add to Bookmark</button>
        </div>
    )
}

export default Product