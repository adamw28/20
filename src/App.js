import React, { Component } from 'react';
import { hashHistory, Router, Route, Link, IndexRoute } from 'react-router';
class App extends Component {
 render() {
   return (
     <Router history={hashHistory}>
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='/contact' component={Contact} />
    </Route>
</Router>
   )
 }
}
const Home = () => <h1>Hej, tu Home component</h1>
const Contact = () => <h1>A tu Contact component</h1>
const Navigation = props => (
    <div>
       <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        {props.children}
    </div>
);
export default App