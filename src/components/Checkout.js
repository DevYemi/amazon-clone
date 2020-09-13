import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (

        <div className="checkout">
            <div className="checkout__column1">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon ad" className="checkout__ad" />

                {
                    basket.length === 0 ? (
                        <div>
                            <h2>YOUR SHOPPING BASKET IS EMPTY</h2>
                            <p>You have no item in the basket to buy one or add item to thebasket click "Add to basket" next to the item</p>
                        </div>) :
                        (
                            <div>
                                <h2 className="checkout__title">This is the shopping basket</h2>
                                {basket.map(item =>
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        ratings={item.ratings}
                                        price={item.price}
                                    />)}
                            </div>
                        )
                }
            </div>
            {basket.length > 0 && <div className="checkout__column2">{<SubTotal />}</div>}


        </div>
    )
}
export default Checkout 