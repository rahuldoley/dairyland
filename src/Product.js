import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({ id, product_name, description, price, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                product_name: product_name,
                description: description,
                price: price
            }
        })
    };
  
    return (
       <div className='product'>
           <div className='card'>
                <img src={image} alt="" />
                <div className="product_info">
                    <h2>{product_name}</h2>
                    <p>{description}</p>
                    <p className="product_price">
                            <small>₹</small>
                            <strong>{price}</strong>
                    </p>
                </div>
                <button onClick={addToBasket}>Add to Basket</button>
           </div>
       </div>
    )
}

export default Product;
