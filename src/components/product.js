import React from 'react'

function Product(props) {
    var { id, price, image, ratings, title } = props
    return (
        <div className="product">
            <div className="product__info">
            <p className="product__title">{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className="product__rating">
                {Array(ratings).fill().map((_) =>( <span role='img' aria-label="Star">&#11088;</span>))}
            </p>
            </div>
            
           <img src={image} alt="product-imag"/>
           <button>Add to Bookmark</button>
        </div>
    )
}

export default Product