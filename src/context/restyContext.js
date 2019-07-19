import React from "react";
import superagent from 'superagent';
import md5 from 'md5';

export const RestyContext = React.createContext();

/**
 * RESTy provider class component
 * @description Resty provider  class that applies context for the entire application and all components
 */
class RestyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      requestBody: '',
      username: '',
      password: '',
      token: '',
      header: {},
      body: {},
      history: {},
      headersVisible: false,
      saveHistory: this.saveHistory,
      updateHistory: this.updateHistory,
      resetFormFromHistory: this.resetFormFromHistory,
      handleChange: this.handleChange,
      toggleHeaders: this.toggleHeaders,
      callAPI: this.callAPI

    };
  }

/**
* saveHistory function
* @description saves the history to state
*/
saveHistory = (history) => {
  localStorage.setItem('history', JSON.stringify(history));
  this.setState({history});
};

/**
* updateHistory function
* @description updates the history in state
*/

updateHistory = () => {
  let url = new URL(this.state.url);

  let lastRun = {
    host: url.hostname,
    path: url.pathname,
    url: this.state.url,
    method: this.state.method,
    requestBody: this.state.requestBody,
    username: this.state.username,
    password: this.state.password,
    token: this.state.token,
    body: {},
    header: {},
  };

  let key = md5(JSON.stringify(lastRun));
  let entry = { [key]: lastRun };
  let history = { ...this.state.history, ...entry };
  this.setState({ history });
  this.saveHistory();
};

/**
* resetFormFromHistory function
* @param {object} event
* @description resets the form from the history
*/
resetFormFromHistory = event => {
  event.preventDefault();
  let newState = this.state.history[event.currentTarget.id];
  this.setState({ ...newState });
};

/**
* handler function for the any change events
* @param {object} event
* @description Sets the state properties to whatever was passed in from the event
*/
handleChange = event => {
  let prop = event.target.name;
  let value = event.target.value;
  this.setState({ [prop]: value });

  // If basic/bearer, clear the other
  if (prop === 'token') {
    let username = '';
    let password = '';
    this.setState({ username, password });
  }

  if (prop.match(/username|password/)) {
    let token = '';
    this.setState({ token });
  }
};

/**
* toggleHeaders function
* @description toggles the headers visibility
*/
toggleHeaders = () => {
  let headersVisible = !this.state.headersVisible;
  this.setState({ headersVisible });
};

/**
* callAPI function
* @param {object} event
* @description calls the API that was passed in
*/
callAPI = event => {
  console.log('hey');
  event.preventDefault();

  let contentType = { 'Content-Type': 'application/json' };
  let bearer = this.state.token
    ? { Authorization: `Bearer ${this.state.token}` }
    : {};
  let basic =
    this.state.username && this.state.password
      ? {
          Authorization:
            'Basic ' + btoa(`${this.state.username}:${this.state.password}`),
        }
      : {};

  superagent(this.state.method, this.state.url)
    .set('Content-Type', 'application/json')
    .set(Object.assign(contentType, bearer, basic))
    .send(this.state.requestBody)
    .then(response => {
      let header = response.header;
      let body = response.body;
      this.setState({ header, body });
      this.updateHistory();
    })
    .catch(e => {
      let body = { error: e.message };
      let header = {};
      this.setState({ header, body });
    });
};

  render() {
    return (
      <RestyContext.Provider value={this.state}>
        {this.props.children}
      </RestyContext.Provider>
    );
  }
}

export default RestyProvider;