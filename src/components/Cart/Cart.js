import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h1>Total Added Items:{cart.length} </h1>
            {
                cart.map(cartItem=><p>{cartItem.name} 
                <button onClick={()=>handleRemoveFromCart(cartItem)}>X</button></p>)
            }
            
        </div>
    );
};

export default Cart;