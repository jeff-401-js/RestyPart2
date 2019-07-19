import React, { useContext} from 'react';
import { RestyContext } from "../../context/restyContext";

/**
 * Headers class component that returns the div containing the headers
 * @description returns a div containing the headers components for adding username, password and tokens
 */

function Headers () {
  const state = useContext(RestyContext);
    return(
      <div id="headers">
      <button onClick={state.toggleHeaders}>
        Headers
      </button>
      <div className={'visible-' + state.headersVisible}>
        <h2>Basic Authorization</h2>
        <input
          onChange={state.handleChange}
          name="username"
          placeholder="Username"
          value={state.username}
        />
        <input
          onChange={state.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          value={state.password}
        />
      </div>
      <div className={'visible-' + state.headersVisible}>
        <h2>Bearer Token</h2>
        <input
          onChange={state.handleChange}
          type="text"
          className="wide"
          name="token"
          placeholder="Token"
          value={state.token}
        />
      </div>
    </div>
    )
  
}

export default Headers;