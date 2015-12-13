import React      from 'react'
import { render } from 'react-dom'

const Top = React.createClass ({
  render() {
    return(
    <div>
      <h3>sssss</h3>
      <div className="header">mariee</div> 
    </div>
    );
  }
})

const Offers = React.createClass ({
  render() {
    return(
      <h3>Offers</h3>
    );
  }
})

const Index = React.createClass ({
  render() {
    return(
      <p>indexpage</p>
    );
  }
})

const New = React.createClass ({
  render() {
    return(
      <p>newpage</p>
    )
  }
})

const Show = React.createClass ({
  render() {
    return(
      <p>showpage</p>
    )
  }
})

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
