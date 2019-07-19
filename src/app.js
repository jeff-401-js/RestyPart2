import './style/reset.css';
import './style/style.css';

import React from 'react';

import Header from './components/header/';
import Footer from './components/footer/';
import RESTy from './components/resty';

// import * as actions from "./store/actions.js";

/**
 * App class component
 * @description App class acts as an aggregator for components
 */


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <RESTy />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

