import React from "react"
import Menu from "../components/Menu/Menu"
import Titulo from "../components/Titulo/Titulo"

const Home = () => {
	return (
		<>
			<Menu />
			<Titulo titulo={"Home"}/>
			<h2>Home 2</h2>
		</>
	)	
}

export default Home