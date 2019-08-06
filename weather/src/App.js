import React from "react";
import Info from "./components/info"
import From from "./components/form"
import Weather from "./components/weather"

const API_KEY = "84516ae36c357ea432a581e9e8ba2ea5"

class App extends React.Component {

    state = {
	temp: undefined,
	city: undefined,
	country: undefined,
	sunrise: undefined,
	sunset: undefined,
	error: undefined
    }

    gettingWeather = async (e) => {
	e.preventDefault();
	const city = e.target.elements.city.value;
	const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
	const data = await api_url.json();
	console.log(data);

	this.setState({
	    temp: data.main.temp,
	    city:
	});
    }

    render() {
	return (
	    <div>
		<Info />
		<From weatherMethod={this.gettingWeather}  />
		<Weather />
	    </div>
	);
    }
}

export default App;
