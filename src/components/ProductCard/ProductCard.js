import React, { useState, useEffect } from 'react';
import "./ProductCard.css";

const ProductCard = ({product}) => {

    console.log(product)

    const [ productImageId, setProductImageId ] = useState(null);

    const photoCollection = [product.images[0].src, product.images[1].src]

    return (
        <div className="product-card" key={product.id}>
            <div className="product-image hidden">
                <img src={photoCollection[0]}/>
                <img src={photoCollection[1]}/>
            </div>
            <div 
                className="product-image"
                onMouseEnter={() => setProductImageId(product.id)}
                onMouseLeave={() => setProductImageId(null)}>
                {productImageId !== product.id && <img src={photoCollection[0]} alt={product.title}/>}
                {productImageId === product.id && <img src={photoCollection[1]} alt={product.title}/>}
            </div>
            <div>{product.title.split("-")[0]}</div>
            <div>{product.title.split("-")[1].split("(")[0]}</div>
            <div>{product.variants.length} Styles Available</div>
        </div>
    )
}

export default ProductCard;
