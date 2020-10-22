import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    return ( 
        <footer className={`${styles.footer}`}>
            <div>
                <ul>
                    <li>Privacy policy</li>
                    <li>Terms of use</li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;