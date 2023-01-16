import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import "./Home.css";

const Home = () => {
    const [cart, setCart] = useState([]);
    const [products ,setProducts] = useProducts();

    const handleAddToCart = (selectedItem)=>{
        const exist = cart.find(cartItem=> cartItem._id === selectedItem._id)

        if(!exist){
            const newCart= [...cart, selectedItem]
            setCart(newCart);
        }
        else{
            alert('Item Already Added')
        }
        
    }

    const handleRemoveFromCart = (selectedItem) =>{
         const rest = cart.filter(cartItem=>cartItem._id !== selectedItem._id)
         setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="shop-container">
                 {
                    products.map(product=><Shop 
                     key={product._id}
                     product={product}
                     handleAddToCart ={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleRemoveFromCart = {handleRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default Home;