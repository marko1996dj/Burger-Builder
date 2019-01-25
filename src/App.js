import React, { Component } from 'react';
import classes from './App.module.scss';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import BuildControls from './components/Burger/BuildControls/BuildControls';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
