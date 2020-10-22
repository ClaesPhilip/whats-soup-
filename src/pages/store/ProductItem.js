import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

import './ProductItem.css';

// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card">
            <img style={{display: "block", margin: "0", minHeight:'400px', maxHeight:'399px'}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt="soup"/>
            <p className="name">{product.name}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className='background'></div>
            <div className="text-right">

            {/* <Popup trigger={<button className="button btn btn-link btn-sm mr-0"> Ingredients </button>} modal>
                <span> <p className="btn btn-link btn-sm mr-2">Details</p> </span>
            </Popup> */}
             

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                }
                
            </div>
        </div>
     );
}
 
export default ProductItem;