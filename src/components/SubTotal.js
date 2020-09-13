import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue} from './StateProvider';
import {getBasketTotal } from './reducer'

function SubTotal() {
    const [{ basket }] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>SubTotal {basket.length} item: <strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains
                        </small>
                    </>
                )

                }
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'} />
            <button>Proceed to Checkout</button>
        </div>
    )
}
export default SubTotal