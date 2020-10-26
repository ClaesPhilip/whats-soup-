import React from 'react';
import { Link } from 'react-router-dom';

import './landing.css';

const LandingPage = () => {

    return(
        <div className='landing-container'>
            <p className='landing-heads'>Eey!</p>
            <h3 className='landing-head'>what´s soup?</h3>

            <Link to="/store" className="landingBtn">Go to store</Link>
            <Link to="/Register" className="landingBtn">Log in</Link>
            <Link to="/Register" className="landingBtn">Register</Link>
        </div>
    );
}

export default LandingPage;