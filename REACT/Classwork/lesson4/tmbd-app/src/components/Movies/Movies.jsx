import React from "react";
import MovieTV from "./components/MovieTV";
import './Movies.scss'
export default class Movies extends React.Component{
	render() {
		const {handelCurrentFilm, modal} = this.props;
		return(
			<>
			<MovieTV handelCurrentFilm = {handelCurrentFilm} modal={modal}/>
			</>
		)
	}
}
