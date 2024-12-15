import React from 'react';
import useProducts from '../hooks/useProducts';

const Myproducts = () => {

    const [products] = useProducts()
    console.log(products);

    return (
        <div>
            hiiiii
        </div>
    );
};

export default Myproducts;