import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="about-page text-center mt-5">
                <h1 className='about-header'>Why</h1>
                <h1 className='about-header1'>What´s soup</h1>
                <p className='about-text'>Sustainability - we think it's important! So important that we work with it at all levels. 
                    From a small seed that germinates the soil,  the double climate compensation of our emissions, 
                    the climate-smart packaging we deliver the food in, the use of only electric cars and bicycles, 
                    to collective agreements with all our staff. We prepare all food and it is completely organic. 
                    We try our best to support the use of local ingredients. Our prices include delivery.
                    So why not support this with a soup for you or a friend , 
                    because your consideration with a soup from us is a very nice consideration!
                </p>

                <h2 className='fun-text'>Is´nt this so(up)</h2>
                <h1 className='fun-text'>fantastic?!</h1>
                
            </div>
        </Layout>
     );
}
 
export default About;