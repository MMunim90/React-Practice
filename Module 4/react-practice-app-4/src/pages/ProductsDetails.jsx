import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router';

const ProductsDetails = () => {
    const {id} = useParams();
    console.log(id)

    const {products} = useFetch();
    // console.log(products);

    const singleProduct = products.find(p=> p.id == id);
    console.log(singleProduct)

    return (
        <div>
            <p>Product Details</p>
            <img src={singleProduct?.image} alt="" />
            <p>{singleProduct.title}</p>
            <p>{singleProduct.description}</p>
        </div>
    );
};

export default ProductsDetails;