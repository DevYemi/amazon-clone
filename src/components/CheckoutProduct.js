import React from 'react'
import {useStateValue} from './StateProvider'

function CheckoutProduct(props) {
    const [, dispatch] = useStateValue()
    const removeFromBasket = () =>{
      dispatch({
          type: "REMOVE_FROM_BASKET",
          itemId: id,
      })
    }
    const { id, title, price, ratings, image } = props
    return (
        <div className="checkoutProduct">
            <div><img src={image} className="checkoutProduct__img" alt="product" /></div>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">
                    {Array(ratings).fill().map((_) => (<span role='img' aria-label="Star">&#11088;</span>))}
                </p>
                <button onClick={removeFromBasket}>Remove from Bookmark</button>
            </div>
        </div>
)
}
export default CheckoutProduct