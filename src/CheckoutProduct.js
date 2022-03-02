import React from 'react'
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider"

function CheckoutProduct({id, title, image, price, rating}) {
  const [{basket  }, dispatch] = useStateValue();
  const removefrombasket = () => {
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
    });
  };
  
  return (
    <div className='checkoutProduct'>
        <img  src={image} className="checkoutProductImage" alt=""/>
        <div className='checkoutProductinfo'>
            <p className='checkoutProducttitle'>{title}</p>
            <p className='checkoutProductprice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProductrating">{
                    Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removefrombasket} >Remove From Cart</button>
        </div>
        
    </div>
  )
}

export default CheckoutProduct