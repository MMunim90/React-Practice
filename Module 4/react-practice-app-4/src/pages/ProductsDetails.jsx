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
        <div className='m-10'>
            <p className='text-center my-10 text-2xl font-bold'>Product Details</p>
            <img className='m-auto' src={singleProduct?.image} alt="" />
            <p className='my-4 text-2xl font-bold text-center'>{singleProduct?.title} ({singleProduct?.category})</p>
            <p>{singleProduct?.description}</p>
        </div>
    );
};

export default ProductsDetails;