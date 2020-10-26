import React from 'react';

import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout';

import Form from '../form';

import './register.css';
 


const Register = () => {
    
    return ( 
        <Layout title="Register" description="This is the Register page" >
            <div className='register-container'>
                {/* <div className="text-center mt-5">
                    <h1>Store</h1>
                    <p>Store</p>
                </div> */}
                <Form/>
                <Link to="/store" className="reg-submit-btn">Submit</Link>
            </div>
        </Layout>
     );
}
 
export default Register;