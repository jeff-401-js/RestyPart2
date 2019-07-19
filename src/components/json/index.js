import React, { useContext } from 'react';
import { RestyContext } from "../../context/restyContext";
import ReactJson from 'react-json-view';

/**
 * Json class component that returns the div containing the json outputs
 * @description returns a div using the react json dependency for json viewing
 */

function Json () {
  const state = useContext(RestyContext);
    return(
      <div id="json">
      <ReactJson
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={state.header}
      />
      <ReactJson
        name="Response"
        enableClipboard={false}
        collapsed={false}
        src={state.body}
      />
    </div>
    )
  
}

export default Json;
