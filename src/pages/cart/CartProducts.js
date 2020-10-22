import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { CartContext } from '../../contexts/CartContext';

import Time from './time';

import CartItem from './CartItem';
import styles from './CartProducts.module.scss';

const CartProducts = () => {

    const { cartItems } = useContext(CartContext);
    

    return ( 
        <div className={styles.p__container}>

            <div className="card card-body border-0">
                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }
            <h6 className='buy-more-header'>Do you feel pleased or do you want something more?</h6>
                <div className='hel'>
                <Link to="/store" className="buy-more-btn">BUY MORE</Link>
                </div>
            </div>
            <Time />
        </div>

     );
}
 
export default CartProducts;