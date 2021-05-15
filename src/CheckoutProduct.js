import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

function ChecoutProduct({ id, product_name, description, price, image, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{product_name}</p>
            <p className='checkoutProduct__title'>{description}</p>
            <p className="checkoutProduct__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
        </div>
    </div>
    )
}

export default ChecoutProduct
