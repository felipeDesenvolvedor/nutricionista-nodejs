import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Users from "./Pages/Users"
import Pacientes from "./Pages/Pacientes"


const Routes = () => {
	return (
		<>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/users">
					<Users />
				</Route>
				<Route path="/pacientes">
					<Pacientes />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			
		</>
	)
}

export default Routes