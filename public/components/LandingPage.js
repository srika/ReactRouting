
var React = require('react');
var NavBar = require('NavBar');

var LandingPage = React.createClass({
    render: function(){
        return(
            <div>
                <NavBar/>
                <h2> Welcome to LandingPage Component </h2>

                {this.props.children}
            </div>
        )
    }
})

module.exports = LandingPage