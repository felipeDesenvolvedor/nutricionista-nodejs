import React from "react"
import {Switch, Route} from "react-router-dom"
import {
	Home, 
	Pacientes, 
	Alimentos, 
	Modelos, 
	Substituicoes, 
	Receitas, 
	Agendas, 
	Financeiro, 
	Secretarias, 
	Configuracoes } from "./Pages/Paginas"


const Routes = () => {
	return (
		<>
			<Switch>
				<Route path="/configuracoes">
					<Configuracoes />
				</Route>
				<Route path="/secretarias">
					<Secretarias />
				</Route>
				<Route path="/financeiro">
					<Financeiro />
				</Route>
				<Route path="/agendas">
					<Agendas />
				</Route>
				<Route path="/receitas">
					<Receitas />
				</Route>
				<Route path="/substituicoes">
					<Substituicoes />
				</Route>
				<Route path="/modelos">
					<Modelos />
				</Route>
				<Route path="/alimentos">
					<Alimentos />
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