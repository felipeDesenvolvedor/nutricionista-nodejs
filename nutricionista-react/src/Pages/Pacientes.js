import React from "react"
import Menu from "../components/Menu/Menu"
import PacientesLista from "../components/PacientesLista/PacientesLista"
import Titulo from "../components/Titulo/Titulo"
import Wrapper from "../components/Wrapper/Wrapper"

const Pacientes = () => {
	return (
		<Wrapper>
			<Menu className={"menu"}/>
			<Titulo className={"titulo"} titulo={"Pacientes"}/>
			<PacientesLista className={"content"}/>
		</Wrapper>
	)     
}

export default Pacientes