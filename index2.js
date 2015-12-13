var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var data = [
  {id: "1", budget: "100"},
  {id: "2", budget: "200"}
];

var offer_data = [
  {id: "1", detail: "hoge"},
  {id: "2", detail: "foo"}
];

var Top = React.createClass ({
  render: function() {
    return(
      <div>
        <h3>Top</h3>
        <div className="header">
          <div className="logo">marie</div>
          <div className="navigation"><a href="">marieTOWA</a></div>
          <div className="navigation"><a href="">sennmontenn</a></div>
          <div className="navigation"><a href="">iraisagasu</a></div>
          <div className="button"><a className="btn" href="">Hazime</a></div>
          <div className="button"><a className="btn" href="">Login</a></div>
        </div>
      </div>
    );
  }
})

var Offers = React.createClass ({
  render: function() {
    return(
      <OfferList data={offer_data}/>
    );
  }
})

var OfferList = React.createClass ({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    var offerNodes = this.props.data.map(function (offer) {
      return(
        <table>
          <tr>
            <th>
              ID
            </th>
            <th>
             Detail
            </th>
            <th>
            </th>
          </tr>
          <Offer id={offer.id} detail={offer.detail} />
        </table>
      );
    });
    return(
      <div ClassName="offerList">
        {offerNodes}
      </div>
    );
  }
})

var Offer = React.createClass ({
  render: function() {
    return(
      <tr>
        <td>
          {this.props.id}
        </td>
        <td>
          {this.props.detail}
        </td>
        <td>
          <Link to={"offers/show/" + this.props.id}>show</Link>
        </td>
      </tr>
    );
  }
})

var OfferDetail = React.createClass ({
  render: function() {
    return(
      <table>
        <tr>
         <th>
           ID
         </th>
         <td>
           {this.props.id}
         </td>
        </tr>
        <tr>
         <th>
           Detail
         </th>
         <td>
           {this.props.detail}
         </td>
        </tr>
      </table>
    );
  }
})

var OfferNew = React.createClass ({
  render: function() {
    return(
      <h3>OfferNew</h3>
    );
  }
})

var Demands = React.createClass ({
  render: function() {
    return (
      <DemandList data={data}/>
    );
  }
})

var DemandList = React.createClass ({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    var demandNodes = this.props.data.map(function (demand) {
      return (
        <table>
          <tr>
            <th>
              ID
            </th>
            <th>
              budget
            </th>
            <th>
            </th>
          </tr>
          <Demand id={demand.id} budget={demand.budget} />
        </table>
      );
    });
    return (
      <div ClassName="demandList">
        {demandNodes}
      </div>
    );
  }
})

var Demand = React.createClass ({
  render: function() {
    return(
      <tr>
        <td>
          {this.props.id}
        </td>
        <td>
          {this.props.budget}
        </td>
        <td>
          <Link to={"demands/show/" + this.props.id}>show</Link>
        </td>
      </tr>
    );
  }
})

var DemandNew = React.createClass ({
  render: function() {
    return(
      <form className="demandForm">
        <input id="budget" type="text" placeholder="Please Write Your Budget"/>
        <input type="submit"/>
      </form>
    );
  }
})

var DemandDetail = React.createClass ({
  render: function() {
    return(
      <table>
        <tr>
         <th>
           ID
         </th>
         <td>
           {this.props.id}
         </td>
        </tr>
        <tr>
         <th>
           Budget
         </th>
         <td>
           {this.props.budget}
         </td>
        </tr>
      </table>
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
          <li><Link to="/demands/new">Demand New</Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li><Link to="/offers/new">Offer New</Link></li>
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
      <Route path="demands"          component={Demands}/>
      <Route path="demands/new"      component={DemandNew}/>
      <Route path="demands/show/:id" component={DemandDetail}/>
      <Route path="offers"           component={Offers}/>
      <Route path="offers/new"       component={OfferNew}/>
      <Route path="offers/show/:id"  component={OfferDetail}/>
    </Route>
  </Router>
  ),
  document.getElementById("container")
);
