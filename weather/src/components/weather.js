import React from "react";

class Weather extends React.Component {
    render() {
	return (
	    <div>
		{this.props.city &&
		    <div>
			<p>Место: {this.props.city}, {this.props.country}</p>
			<p>Температура: {this.props.temp}</p>
			<p>Восход солнца: {this.props.sunrise}</p>
			<p>Заход солнца: {this.props.sunset}</p>
			<p></p>
		    </div>
		}
	    </div>
	);
    }
}

export default Weather;