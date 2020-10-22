import React from 'react';
import { Link } from 'react-router-dom';

import './landing.css';

const LandingPage = () => {



    return(
        
        <div className='landing-container'>
            <h1 className='landing-heads'>Eey!</h1>
            <h3 className='landing-head'>what´s soup?</h3>

            <Link to="/store" className="landingBtn">Go to store</Link>
            <Link to="/store" className="landingBtn">Log in</Link>
            <Link to="/store" className="landingBtn">Register</Link>

        </div>
        
    );
}


export default LandingPage;