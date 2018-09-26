var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        var {location, temp} = this.props;
        return (
            <div>
                <h3>My city is {location}</h3>
                <h3>temparature is {temp}C</h3>
            </div>
        )
    }
})

module.exports = WeatherMessage