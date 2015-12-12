var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Top = React.createClass ({
  render: function() {
    return(
      <h3>Top</h3>
    );
  }
})

var Offers = React.createClass ({
  render: function() {
    return(
      <h3>Offers</h3>
    );
  }
})

var Demands = React.createClass ({
  render: function() {
    return(
      <h3>demands</h3>
    );
  }
})

var App = React.createClass({
  render: function() {
    return(
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Top</Link></li>
          <li><Link to="/demands">Demands</Link></li>
          <li><Link to="/offers">Offers</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
})

// Router や Route も React コンポーネント
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Top}/>
      <Route path="demands" component={Demands}/>
      <Route path="offers" component={Offers}/>
    </Route>
  </Router>
  ),
  document.getElementById("container")
);
