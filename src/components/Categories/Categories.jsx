import React, { useState } from "react";
const Categories = () => {
  const categoriesArray = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [currentCategorie, setCurrentCategorie] = useState(0);
  const clickToCategoryBtn = (index) => {
    setCurrentCategorie(index);
  };
  return (
    <div className="categories">
      <ul>
        {categoriesArray.map((value, index) => {
          return (
            <li
              onClick={() => {
                clickToCategoryBtn(index);
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
export default Categories;
