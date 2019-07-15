import React from 'react';
import ReactJson from 'react-json-view';

/**
 * Json class component that returns the div containing the json outputs
 * @description returns a div using the react json dependency for json viewing
 */

class Json extends React.Component {
  render() {
    return(
      <div id="json">
      <ReactJson
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={this.props.header}
      />
      <ReactJson
        name="Response"
        enableClipboard={false}
        collapsed={false}
        src={this.props.body}
      />
    </div>
    )
  }
}

export default Json;
