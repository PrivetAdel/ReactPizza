import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Categories, PizzaBlock, PizzaLoadingBlock, SortPopup} from '../components';
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';

const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'asc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    });
  };
 
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={categoryItems}
          onClickCategory={onSelectCategory}
        />
        <SortPopup 
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType} />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((item) => (
          <PizzaBlock 
            onClickAddPizza={handleAddPizzaToCart}
            key={item.id} 
            addedCount={cartItems[item.id] && cartItems[item.id].items.length}
            {...item} 
          />
        )) 
        : Array(12).fill(0).map((_, index) => (<PizzaLoadingBlock key={index} />))}
      </div>
    </div>
  );
};

export default Home;
