import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Gallery.css';

const Gallery = ({products, category, setCategory, challenges, setChallenges}) => {

    const [ startIndex, setStartIndex ] = useState(0);
    const [ endIndex, setEndIndex ] = useState(12);

    const productGallery = products?.slice(startIndex, endIndex).map((product) => (
        <ProductCard product={product}/>
    )
    );

    return (
        <>
        { products && !challenges &&
        <>
            <h2>{category}</h2> 
            <div className="product-gallery"> {productGallery}</div> 
        </> }
        </>
    )
}

export default Gallery;