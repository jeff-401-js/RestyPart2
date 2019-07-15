import React from 'react';

/**
 * Headers class component that returns the div containing the headers
 * @description returns a div containing the headers components for adding username, password and tokens
 */

class Headers extends React.Component {
  render(){
    return(
      <div id="headers">
      <button onClick={this.props.toggleHeaders}>
        Headers
      </button>
      <div className={'visible-' + this.props.headersVisible}>
        <h2>Basic Authorization</h2>
        <input
          onChange={this.props.handleChange}
          name="username"
          placeholder="Username"
          value={this.props.username}
        />
        <input
          onChange={this.props.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          value={this.props.password}
        />
      </div>
      <div className={'visible-' + this.props.headersVisible}>
        <h2>Bearer Token</h2>
        <input
          onChange={this.props.handleChange}
          type="text"
          className="wide"
          name="token"
          placeholder="Token"
          value={this.props.token}
        />
      </div>
    </div>
    )
  }
}

export default Headers;