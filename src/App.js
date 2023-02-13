import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Sort from "./components/Sort/Sort";
import "./scss/app.scss";
import pizzaArray from "./data/data";
import CategoriesTry1 from "./components/Categories/CategoriesTry1";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              {/* <Categories /> */}
              <CategoriesTry1/>
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              {pizzaArray.map((obj) => {
                return (
                  <PizzaBlock key={obj.id}
                    title={obj.title}
                    imgUrl={obj.imageUrl}
                    price={obj.price}
                    sizes={obj.sizes}
                    types={obj.types}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
