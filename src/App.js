import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages';
import axios from 'axios';
import {connect} from 'react-redux';
import {setPizzas} from './redux/actions/pizzas';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3001/db.json').then(({data}) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact >
            <Home items={this.props.items} />
          </Route>
          <Route path="/cart" exact component={Cart} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  };
};

const mapDispatchToProps = {
  setPizzas
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
