import {combineReducers} from 'redux';
import filters from './filters';
import pizzas from './pizzas';

const rootReduser = combineReducers({
  filters,
  pizzas
});

export default rootReduser;