import React, { useEffect, useState } from 'react';
import './App.css';
import CategoryView from './components/Categories/Categories';
import ChallengeOne from './components/ChallengeOne/ChallengeOne';
import Gallery from './components/Gallery/Gallery';
import ChallengeTwo from './components/ChallengeTwo/ChallengeTwo';

function App() {

    const [ products, setProducts ] = useState();
    const [ categories, setCategories ] = useState();
    const [ productsByCategory, setProductsByCategory ] = useState();
    const [ category, setCategory ] = useState("");
    const [ challenges, setChallenges ] = useState(false);

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
        <CategoryView 
          products={productsByCategory} 
          categories={categories}
          setCategory={setCategory}
          challenges={challenges}
          setChallenges={setChallenges}/>
        <Gallery 
          products={productsByCategory}
          category={category}
          setCategory={setCategory}
          challenges={challenges}
          setChallenges={setChallenges}/>
        <ChallengeOne 
          challenges={challenges}/>
        <ChallengeTwo 
          challenges={challenges}/>
    </div>
  );
}

export default App;
