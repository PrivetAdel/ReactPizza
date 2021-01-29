import React from "react";
import {Categories, PizzaBlock, SortPopup} from '../components';

const Home = ({items}) => {
  const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryItems}
        />
        <SortPopup items={sortItems} />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items.map((item) => (
            <PizzaBlock key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
