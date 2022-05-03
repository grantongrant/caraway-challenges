import React, { useEffect, useState } from 'react';
import "./ProductCard.css";
import NewBadge from '../NewBadge/NewBadge';
import LoadingTwo from '../Loading/LoadingTwo';

const ProductCard = ({ category, startIndex, product }) => {

    const [ loaded, setLoaded ] = useState(false);
    const [ productImageId, setProductImageId ] = useState(null);
    const publishedDate = new Date(product.published_at).getTime();
    const now = Date.now()
    const photoCollection = [product.images[0].src, product.images[1].src]

    useEffect(() => {
        setLoaded(false);
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, [category, startIndex]);

    return (
        <div className="product-card" key={product.id}>
            <div className="product-image hidden">
                <img src={photoCollection[0]} alt="hidden1"/>
                <img src={photoCollection[1]} alt="hidden2"/>
            </div>
            {!loaded ? <LoadingTwo/> :
            <>
            <div 
                className="product-image"
                onMouseEnter={() => setProductImageId(product.id)}
                onMouseLeave={() => setProductImageId(null)}>
                {productImageId !== product.id && <img src={photoCollection[0]} alt={product.title}/>}
                {productImageId === product.id && <img src={photoCollection[1]} alt={product.title}/>}
                {now - publishedDate < 259200000 && <NewBadge/>}
            </div>
            <div className="title-and-price">
                <div className="title">{product.title.split("-")[0]}</div>
                <div className="price">${product.variants[0].price.split(".")[0]}</div>
            </div>
            <div className="variants">{product.title.split("-")[1]}</div>
            <div className="variants">{product.variants.length > 1 ? `${product.variants.length} Styles Available` : '1 Style Available'}</div>
            </>}
        </div>
    )
}

export default ProductCard;
