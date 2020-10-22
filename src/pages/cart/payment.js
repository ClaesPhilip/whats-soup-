import React from 'react';
import './time.css';

//img
import Swish from './swish.png';
import Mastercard from './mastercard.png';
import Visa from './visa.svg';
import Klarna from './klarna.png';



const Payment = () => {



return(
<form id="contact-form" className='payment-forms'>
<h3 className='personal-detail'>Payment</h3>
    <div className="form-group">
        <label>Swish</label>
        <img className='swishLogo' src={Swish} alt='swish'></img>
        <input className="form-control" placeholder='5465 7863 2324 ****'/>
    </div>
    <div className="form-group">
        <label>Mastercard</label>
        <img className='mastercardLogo' src={Mastercard} alt='mastercard'></img>
        <input className="form-control" placeholder='5465 7863 2324 ****'/>
    </div>
    <div className="form-group">
        <label>Visa</label>
        <img className='visaLogo' src={Visa} alt='visa'></img>
        <input className="form-control" placeholder='5465 7863 2324 ****' />
    </div>
    <div className="form-group">
        <label>Klarna</label>
        <img className='klarnaLogo' src={Klarna} alt='klarna'></img>
        <input className="form-control" placeholder='5465 7863 2324 ****'/>
    </div>
</form>
    
)};

export default Payment;