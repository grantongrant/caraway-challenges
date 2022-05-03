import React from 'react';
import './Categories.css';
import Loading from '../Loading/LoadingOne';

const CategoryView = ({products, categories, setCategory, challenges, setChallenges, startIndex, setStartIndex, endIndex, setEndIndex}) => {

    const categoryList = categories?.map((category) => 
        <li key={category} onClick={e => {
            setCategory(category)
            setChallenges(false)
            setStartIndex(1)
            setEndIndex(12)}}>
            {category}</li>
    );
    
    return (
        <> 
        <div className="category-container">
            { categories ? 
            <ul className="category-list">{categoryList}
                <li onClick={e => setChallenges(true)}>Challenges</li>
            </ul>: <Loading/>}
        </div>
        </>
    )
}

export default CategoryView;