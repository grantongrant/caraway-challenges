import React, { useState } from 'react';
import './Categories.css';

const CategoryView = ({products, categories, setCategory, challenges, setChallenges}) => {

    const isLoading = <div className="loading">Loading...</div>

    const categoryList = categories?.map((category) => 
        <li key={category} onClick={e => {
            setCategory(category)
            setChallenges(false)}}>
            {category}</li>
    );
    
    return (
        <> 
        { !products && !challenges && isLoading }
        <div className="category-container">
            { categories && 
            <ul className="category-list">{categoryList}
                <li onClick={e => setChallenges(true)}>Challenges</li>
            </ul> }
        </div>
        </>
    )
}

export default CategoryView;