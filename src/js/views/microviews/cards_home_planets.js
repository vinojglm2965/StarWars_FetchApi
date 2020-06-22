import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const CardsHomePlanets = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				{!!store.planets &&
					store.planets.results.filter((item, index) => index <= 3).map((item, index) => {
						const nombre = item.name;
						return (
							<div className="card carta" id={index} key={item.name}>
								<img src="http://localhost:8081//img/imagen4.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">
										<Link to={"/single_planet/" + index}>
											<span>{nombre}</span>
										</Link>
									</h5>
									<p className="card-text">
										<strong>rotation_period: </strong>
										{item.rotation_period}
										<br />
										<strong>orbital_period: </strong>
										<strong>{item.orbital_period}</strong>
										<br />
										<strong>diameter: </strong>
										{item.diameter}
										<br />
										<strong>climate: </strong>
										{item.climate}
										<br />
										<strong>terrain: </strong>
										{item.terrain}
										<br />
										<strong>gravity: </strong>
										{item.gravity}
										<br />
										<strong>population: </strong>
										{item.population}
										<br />
									</p>
									<button
										className="btn btn-primary"
										onClick={() => {
											const ejemplo = nombre;
											console.log(ejemplo);
											actions.getFavoritos(nombre);
										}}>
										Fav.
									</button>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};
export default CardsHomePlanets;
