import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";
import Sort from "./components/Sort/Sort";
import "./scss/app.scss";

import CategoriesTry1 from "./components/Categories/CategoriesTry1";

import React, { useState } from "react";
import PizzaBlockTry1 from "./components/PizzaBlock/PizzaBlockTry1";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch("https://63eb5803f1a969340db5fcc4.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  console.log(items);

  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              {/* <Categories /> */}
              <CategoriesTry1 />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              {/* {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)} */}
                 {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <PizzaBlockTry1 title={obj.title} imgUrl={obj.imageUrl} sizes={obj.sizes} types={obj.types} price={obj.price}/>)}



              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
