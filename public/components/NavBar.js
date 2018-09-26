
var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavBar = React.createClass({
    render: function(){
        return(
            <div>
                <h2> Welcome to NavBar Component </h2>
                
                <ul className="nav nav-tabs">
                <IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/"> Weather </IndexLink>
                <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/Register"> Register </Link>
                <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/ContactUs"> Contact </Link>
                <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/Login"> Login </Link>
                </ul>
            </div>
        )
    }
})

module.exports = NavBar