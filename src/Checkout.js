import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        /> */}

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct 
                id={item.id}
                product_name={item.product_name}
                description={item.description}
                price={item.price}
                image={item.image}
            /> 
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

// import React from 'react';
// import { useStateValue } from "./StateProvider";
// import './Checkout.css';
// import Subtotal from "./Subtotal"
// import ChecoutProduct from './ChecoutProduct';

// function Checkout() {
//     const [{ basket }] = useStateValue();

//     return (
//         <div className="checkout">
//             {/* <div className="checkout-left">
//                 <img className="checkout-ad"
//                      src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
//                      alt=""
//                 />     
//             </div> */}
//             <div>
//                 <h2 className="space">Your Basket</h2>
//                 {basket.map(item => (
//                 <ChecoutProduct 
//                     id={item.id}
//                     product_name={item.product_name}
//                     description={item.description}
//                     price={item.price}
//                     image={item.image}
//                 />    
//             ))}
//             </div>
//             <div className="checkout-right">
//                 <Subtotal />
//             </div>
//         </div>
//     )
// }

// export default Checkout;

// {basket?.length === 0 ? (
//     <div className="checkout-title">
//         <h2>Your Basket is empty</h2>
//         <p>You have no items in your basket. To buy one or more items, "Add to basket" next to the item</p>
//     </div>    
// ) : (
//     <div>
//         <h2 className="space">Your Basket</h2>
//         {basket.map(item => (
//             <ChecoutProduct 
//                 id={item.id}
//                 product_name={item.product_name}
//                 description={item.description}
//                 price={item.price}
//                 image={item.image}
//             />
//         ))}