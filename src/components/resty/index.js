import './resty.css';

import React, { useEffect, useContext } from 'react';
import { RestyContext } from "../../context/restyContext";
import History from '../history/index';
import Form from '../form/index';
import Json from '../json/index';

/**
 * RESTy class component that aggregates the other components and contains most of the apps functionality
 * @description returns most of the other components to app for rendering, contains state, main class for the entire app
 */

function RESTy () {
  const state = useContext(RestyContext);

/**
 * useEffect function
 * @description Sets the state for history on page load
 */
  useEffect(() => {
    try {
      let history = JSON.parse(localStorage.getItem('history'));
      state.saveHistory(history);
    } catch (e) {
      console.error(e);
    };
  }, []);


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
