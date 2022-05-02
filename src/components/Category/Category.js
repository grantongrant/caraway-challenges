import React, { useState, useEffect } from 'react';
import './Category.css';

const CategoryView = ({products, categories, category, setCategory}) => {

    const [ length, setLength ] = useState(0);
    const [ startIndex, setStartIndex] = useState(0);
    const [ endIndex, setEndIndex ] = useState(12);

    const isLoading = <div className="loading">Loading...</div>

    const categoryList = categories?.map((category) => 
        <li key={category} onClick={e => setCategory(category)}>{category}</li>
    );

   const productGallery = products?.slice(startIndex, endIndex).map((product) => 
        <li key={product.id}>{product.title}</li>
    );
    
    return (
        <div className="category-container">
            { categories && <ul>{categoryList}</ul> }
            { products && <ul>{productGallery}</ul> }
        </div>
    )
}

export default CategoryView;