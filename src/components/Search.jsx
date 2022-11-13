import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/module/style.css";

export default function Search({ info, setInfo }) {
	const [value, setValue] = useState("");
	const [city, setCity] = useState("Tehran");
	const API_KEY = "10e500a2733b2361f1e74acf08b3cccc";

	function handleChange(e) {
		setValue(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		setCity(value);
	}

	async function getWeather() {
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=7`
			);
			setInfo(data);
			console.log(data);
		} catch {
			console.log("errrooorrr");
		}
	}

	useEffect(() => {
		getWeather();
	}, [city]);
	return (
		<form onSubmit={handleSubmit} className="form">
			<div className="searchBox">
				<input
					type="text"
					onChange={handleChange}
					placeholder="search the city name"
				/>
				<button className="searchBtn">Check Weather</button>
			</div>
		</form>
	);
}
