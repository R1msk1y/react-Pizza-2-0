import React, { useState } from "react";

const CategoriesTry1 = () => {
  const CategoriesArrayTry1 = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [currentCategorie, setCurrentCategorie] = useState(0);
  const swapCurrentCategory = (index) => {
    setCurrentCategorie(index);
  };
  return (
    <div className="categories">
      <ul>
        {CategoriesArrayTry1.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                swapCurrentCategory(index);
              }}
              className={currentCategorie === index ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesTry1;
