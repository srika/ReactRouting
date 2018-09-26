var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var Api = require('Api');

var WeatherMain = React.createClass({
    
    //inintailze the state [step-1]
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;
        //debugger;
        this.setState({isLoading: true});
        Api.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(errMsg){
            this.setState({isLoading: false});
            alert(errMsg);
        });

    },
    
    render: function(){
        var {isLoading, location, temp} = this.state;
        //conditional rendering
        function renderData(){
            if(isLoading){
                return <h3> Loading Data...</h3>
            }
            else if(temp && location){
                return <WeatherMessage temp={temp} location={location} />
            }
        }
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                {renderData()}
            </div>
        )
    }
})

module.exports = WeatherMain