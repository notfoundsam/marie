import React      from 'react'
import { render } from 'react-dom'
import Top        form './Top'
import Demands    form './Demands'
import Offers     form './Offers'

const App = React.createClass({
  getInitialState() {
    return {
      route: window.location.hash.substr(1)
    }
  },

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    let Child
    switch (this.state.route) {
      case '/demands': Child = Demands; break;
      case '/offers':  Child = Offers; break;
      default:         Child = Top;
    }
    return(
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="/">Top</a></li>
          <li><a href="#/demands">Demands</a></li>
          <li><a href="#/offers">Offers</a></li>
        </ul>
        <Child/>
      </div>
    );
  }
})

React.render(
  <App />,
  document.getElementById('container')
);
