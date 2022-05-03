import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'

import './Gallery.css';

const Gallery = ({products, category, challenges, startIndex, setStartIndex, endIndex, setEndIndex}) => {

    console.log(products)

    const viewPrevious = () => {
        let start = startIndex;
        setStartIndex(start - 12);
        setEndIndex(start - 1);
    }

    const viewNext = () => {
        let end = endIndex;
        setStartIndex(end + 1)
        if (products.length -1 < end + 12) {
            setEndIndex(products.length)
        } else {
            setEndIndex(end+12)
        };
    };

    return (
        <>
        { products && !challenges &&
        <>
            <div className="gallery-header">
                <p id="category-title">{category}</p>
                <div id="view-count">
                    {startIndex > 1 &&
                    <button type="button" className="view-button" onClick={viewPrevious}><AiOutlineDoubleLeft/></button>}
                    <p id="item-count">{products.length < 12 ? `${startIndex} - ${products.length}` : `${startIndex} - ${endIndex}`}</p>
                    {products.length > endIndex && 
                    <button type="button" className="view-button" onClick={viewNext}><AiOutlineDoubleRight/></button>}
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