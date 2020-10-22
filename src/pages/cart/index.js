import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';
import './index.css';


// import DateFnsUtils from '@date-io/date-fns';
// import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import { TextField } from '@material-ui/core';


const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);

    const userData = JSON.parse(localStorage.getItem('user'));

    const time = JSON.stringify(localStorage.getItem('time'));
    

    // const [selectedDate, handleDateChange] = useState(new Date());

    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center mt-5">
                    {/* <h1>Checkout</h1>   */}
                    {/* <p>This is the Cart Page.</p> */}
                </div>



                <div className="col no-gutters justify-content-center">
                    
                    <div className="col-sm-9 p-3 birdie">
                    
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }

                        { checkout &&
                            <div className="checkout-container p-3 text-center">
                                <h1>Hurray,</h1>
                                <h3>Your order is confirmed!</h3>
                                <p>You will recive your order in <br></br> {time} today. 
                                    You will get a notification 5 minutes before we arrive. 
                                    See you soon {userData.name} at {userData.address}!</p>

                                <div>Total Payment: {formatNumber(total)}</div> 

                                <br></br>

                                <Link to="/store" className="emptyCartBtn" onClick={clearCart}>Empty your cart</Link>
                                

                                {/* <p>Checkout successfull</p> */}
                                {/* <p><TextField value={selectedDate}/></p> */}
                                
                                {/* <p>{userData.name}</p> */}
                            </div>
                        }
                    </div>

                    {/* <Time />  */}
                    {/* <div className='timetime'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker 
                        value={selectedDate} 
                        onChange={date => handleDateChange(date)}
                        ampm={false}
                        />
                    </MuiPickersUtilsProvider>
                    </div> */}

                    {
                        cartItems.length > 0 && 
                        <div className="">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>ORDER</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>
                            </div>
                        </div>
                    }
             
                </div>
                
            </div>
        </Layout>
     );
}
 
export default Cart;