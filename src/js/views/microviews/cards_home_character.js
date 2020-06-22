import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const CardsHomeCharacters = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				{!!store.characters &&
					store.characters.results.filter((item, index) => index <= 3).map((item, index) => {
						const nombre = item.name;
						return (
							<div className="card carta" id={index} key={item.name}>
								<img src="http://localhost:8081//img/imagen4.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">
										<Link to={"/single_character/" + index}>
											<span>{nombre}</span>
										</Link>
									</h5>
									<p className="card-text">
										<strong>height: </strong>
										{item.height}
										<br />
										<strong>mass: </strong>
										<strong>{item.mass}</strong>
										<br />
										<strong>hair_color: </strong>
										{item.hair_color}
										<br />
										<strong>skin_color: </strong>
										{item.skin_color}
										<br />
										<strong>eye_color: </strong>
										{item.eye_color}
										<br />
										<strong>birth_year: </strong>
										{item.birth_year}
										<br />
										<strong>gender: </strong>
										{item.gender}
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
export default CardsHomeCharacters;
