import './style/reset.css';
import './style/style.css';

import React from 'react';

import Header from './components/header/';
import Footer from './components/footer/';
import RESTy from './components/resty';

// import * as actions from "./store/actions.js";

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

/**
 * handler function to map state to props
 * @param {object} state
 * @description Sets the state properties
 */

// const mapStateToProps = state => ({
//   data: state.restyStore
// });

/**
 * handler function to dispatch state to props
 * @param {function} dispatch
 * @param {object} getState
 * @description fires off the get, handlePost, handlePut, or handleDelete functions
 */

// const mapDispatchToProps = (dispatch, getState) => ({
//   get: payload => dispatch(actions.getRemote(payload)),
//   handlePost: payload => dispatch(actions.postRemote(payload)),
//   handlePut: payload => dispatch(actions.putRemote(payload)),
//   handleDelete: payload => dispatch(actions.deleteRemote(payload))
// });

/**
 * export default connect
 * @description export which contains the mapStateToProps and mapDispatchToProps
 */

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
