import React, { createContext, useState } from 'react';
import { dummyProducts } from '../services/protein';
import { soupProducts } from '../services/soup';
import { breadProducts } from '../services/bread';
import { spreadProducts } from '../services/spreads';
import { treatsProducts } from '../services/treats';
import { beveragesProducts } from '../services/beverages';

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [products] = useState(dummyProducts);
    const [soup] = useState(soupProducts);
    const [bread] = useState(breadProducts);
    const [spread] = useState(spreadProducts);
    const [treats] = useState(treatsProducts);
    const [beverages] = useState(beveragesProducts);

    return ( 
        <ProductsContext.Provider value={{products, soup, bread, spread, treats, beverages}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;