import './resty.css';

import React from 'react';
import History from '../history/index';
import Form from '../form/index';
import Json from '../json/index';

/**
 * RESTy function component that aggregates the other components and contains most of the apps functionality
 * @public
 * @description returns most of the other components to app for rendering, contains state, main class for the entire app
 */

function RESTy () {

    return (
      <main>
        <History />
        <section className="deck">
          <Form />
          <Json />
        </section>
      </main>
    );
  
}

export default RESTy;
