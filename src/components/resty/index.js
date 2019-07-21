import './resty.css';

import React from 'react';
import History from '../history/index';
import Form from '../form/index';
import Json from '../json/index';

/**
 * RESTy function component that aggregates the other components
 * @public
 * @description returns most of the other components to app for rendering
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
