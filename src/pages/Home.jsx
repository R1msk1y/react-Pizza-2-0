import CategoriesTry1 from "../components/Categories/CategoriesTry1";
import Sort from "../components/Sort/Sort";
import PizzaBlockTry1 from "../components/PizzaBlock/PizzaBlockTry1";
import Skeleton from "../components/PizzaBlock/Skeleton";
import React, { useState } from "react";
const Home = ()=> {
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

    return <>
      <div class="content__top">
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
                : items.map((obj) => (
                    <PizzaBlockTry1
                      title={obj.title}
                      imgUrl={obj.imageUrl}
                      sizes={obj.sizes}
                      types={obj.types}
                      price={obj.price}
                    />
                  ))}
            </div>

    </>

}

export default Home
