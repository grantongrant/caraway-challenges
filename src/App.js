import React, { useEffect, useState } from 'react';
import './App.css';
import ChallengeOne from './components/ChallengeOne/ChallengeOne';
import ChallengeTwo from './components/ChallengeTwo/ChallengeTwo';
import CategoryView from './components/Category/Category';

function App() {

    const [products, setProducts] = useState();
    const [categories, setCategories] = useState();
    const [productsByCategory, setProductsByCategory] = useState();
    const [category, setCategory] = useState("");
    console.log(productsByCategory)

    const createCategories = (products) => {
        const categoryArray = [];
        for (const product of products) {
            if (!categoryArray.includes(product.product_type)) {
                categoryArray.push(product.product_type);
            }
        }
        setCategories(categoryArray);
        setCategory(categoryArray[0]);
    };

    useEffect(() => {
        fetch ('https://www.allbirds.com/products.json?limit=150')
        .then (res => res.json())
        .then (data => {
            setProducts(data.products)
            createCategories(data.products)});
    }, []);

    useEffect(() => {
      setProductsByCategory(products?.filter(product => product.product_type === category))
    }, [category])

  return (
    <div className="App">
      <ChallengeOne/>
      <ChallengeTwo/>
      <CategoryView products={productsByCategory} categories={categories} category={category} setCategory={setCategory}/>
    </div>
  );
}

export default App;
