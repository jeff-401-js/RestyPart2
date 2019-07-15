import React from 'react';

/**
 * History class component that returns the aside containing the History outputs
 * @description returns an aside that contains the History
 */

class History extends React.Component {
  render() {
    return(
      <aside>
        <h2>History</h2>
        <ul id="history">
          {this.props.history &&
            Object.keys(this.props.history).map(key => (
              <li key={key} id={key} onClick={this.props.resetFormFromHistory}>
                <span>
                  <strong>{this.props.history[key].method}</strong>
                </span>
                <span>{this.props.history[key].host}</span>
                <span>{this.props.history[key].path}</span>
              </li>
            ))}
        </ul>
      </aside>
    )
  }
}

export default History;