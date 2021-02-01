import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setPizzas} from './redux/actions/pizzas';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/db.json').then(({data}) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   };
// };

// const mapDispatchToProps = {
//   setPizzas
// };

export default App;
