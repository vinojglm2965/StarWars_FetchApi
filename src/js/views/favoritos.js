import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Favoritos = () => {
	const { store, actions, setStore } = useContext(Context);
	const [elemento, setElemento] = useState(store.lista);

	return (
		<div className="container">
			<ul className="list-group">
				{store.lista.map((item, index) => {
					const borrarElemento = () => {
						console.log("qloq");
						console.log(index);
						const borrar = store.lista.filter((item, i) => i !== index);
						console.log(store.lista);
						console.log(...store.lista, borrar);
						setElemento(borrar);
						actions.borrarElementoDeStore(borrar);
					};
					return (
						<li key={index} className="list-group-item d-flex justify-content-between">
							<Link to={"/single/" + index}>
								<span>
									Link to:
									{item}
								</span>
							</Link>
							<button type="submit" className="btn btn-success" onClick={borrarElemento}>
								Borrar
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
