import React, { useContext, useEffect } from 'react';
import { RestyContext } from "../../context/restyContext";
/**
 * History function component that returns the aside containing the History outputs
 * @public
 * @description returns an aside that contains the History
 */

function History () {
  const state = useContext(RestyContext);
  /**
   * useEffect function
   * @public
   * @description Sets the state for history on page load
   */
    useEffect(() => {
      try {
        let history = JSON.parse(localStorage.getItem('history'));
        if(history) state.saveHistory(history);
      } catch (e) {
        console.error(e);
      };
    }, []);

    return(
      <aside>
        <h2>History</h2>
        <ul id="history">
          {state.history &&
            Object.keys(state.history).map(key => (
              <li key={key} id={key} onClick={state.resetFormFromHistory}>
                <span>
                  <strong>{state.history[key].method}</strong>
                </span>
                <span>{state.history[key].host}</span>
                <span>{state.history[key].path}</span>
              </li>
            ))}
        </ul>
      </aside>
    )
  
}

export default History;