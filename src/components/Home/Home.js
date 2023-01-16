import React from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import "./Home.css";

const Home = () => {
    const [products ,setProducts] = useProducts();
    return (
        <div className='home-container'>
            <div className="shop-container">
                 {
                    products.map(product=><Shop 
                     key={product._id}
                     product={product}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart />
            </div>
        </div>
    );
};

export default Home;