import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RestyProvider from './context/restyContext';

import App from './app.js';

/**
 * Main class component
 * @description Main class that simply imports the App to attach it to the dom
 */

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RestyProvider>
         <App />
        </RestyProvider>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
