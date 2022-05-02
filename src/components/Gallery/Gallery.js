import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Gallery.css';

const Gallery = ({products, category, challenges, startIndex, setStartIndex, endIndex, setEndIndex}) => {

    const viewMore = () => {
        let end = endIndex;
        setStartIndex(end + 1)
        if (products.length -1 < end + 12) {
            setEndIndex(products.length - 1)
        } else {
            setEndIndex(end+12)
        }
    }

    return (
        <>
        { products && !challenges &&
        <>
            <div className="gallery-header">
                <p id="category-title">{category}</p>
                <div id="view-count">
                    <p>{products.length < 12 ? `${startIndex} - ${products.length}` : `${startIndex} - ${endIndex}`}</p>
                    <button type="button" id="view-button" onClick={viewMore}>View More</button>
                </div>
            </div>
            <div className="product-gallery"> {products?.slice(startIndex -1, endIndex).map((product) => (
                <ProductCard product={product}/>))}
            </div> 
        </> }
        </>
    )
}

export default Gallery;