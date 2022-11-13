import React from "react";
import "../assets/module/style.css";

export default function Card({ info }) {
	return (
		<div className="cardContainer">
			{info.city && (
				<div>
					<div className="cardHeader">
						<span id="cityName">{`${info.city.country}(${info.city.name})`}</span>
						<div>
							<span>{`${Math.round(info.list[0].main.temp)}°`}</span>
							{console.log(info.list[0].weather[0].icon)}

							<img
								src={`http://openweathermap.org/img/wn/${info.list[0].weather[0].icon}@2x.png`}
								alt=""
							/>
						</div>
					</div>
					<div className="body_header">
						<div>
							<h6>wind speed</h6>
							<h3>{info.list[0].wind.speed}</h3>
						</div>
						<div>
							<h6>feels like</h6>
							<h3>{info.list[0].main.feels_like}</h3>
						</div>
						<div>
							<h6>humidity</h6>
							<h3>{info.list[0].main.humidity}</h3>
						</div>
						<div>
							<h6>pressure</h6>
							<h3>{info.list[0].main.pressure}</h3>
						</div>
					</div>
					<div className="body_container">
						{info.list.map((item) => {
							return (
								<div className="body_container_details">
									<img
										src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
										alt=""
									/>
									<h3>{item.weather[0].description}</h3>
									<h6>{item.dt_txt.slice(11, 16)}</h6>
									<div className="body_container_Min_Max">
										<span style={{ color: "tomato" }}>
											{`${item.main.temp_max} °`}
										</span>
										<span
											style={{ color: "blue" }}
										>{`${item.main.temp_min} °`}</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
