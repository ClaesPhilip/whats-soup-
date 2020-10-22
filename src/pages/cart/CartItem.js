import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'
import { CartContext } from '../../contexts/CartContext';

import './index.css';


import { formatNumber } from '../../helpers/utils';

const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "150px"}} 
                src={product.photo} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: {formatNumber(product.price)} </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center">
                 <p className="mb-0">Total: {product.quantity}</p>
            </div>
            <div className="addAndRemove-Btns col-sm-4 p-2">
                 <button 
                 onClick={() => increase(product)}
                 className="hell btn btn-sm mr-2 mb-1"> 
                     <PlusCircleIcon width={"20px"} outline={'none'}/>
                 </button>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product)}
                    className="hell btn btn-sm mb-1">
                        <MinusCircleIcon width={"20px"} outline={'none'}/>
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}
                    className="hell btn btn-sm mb-1">
                        <TrashIcon width={"20px"} outline={'none'}/>
                    </button>
                 }
                 
            </div>
            
        </div>
     );
}
 
export default CartItem;