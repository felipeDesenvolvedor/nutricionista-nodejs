import React from "react"
import styled from "styled-components"
import AcaoRapida from "./PacienteAcaoRapida"
import PacienteBox from "./PacienteBox"
import Foto from "../../assets/foto.jpg"

const Wrapper = styled.div`
    display:grid;
    grid-template: auto auto auto / auto auto auto;
`


class PacientesLista extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			pacientes: []
		}
		this.updateComponent = this.updateComponent.bind(this)
	}

	updateComponent() {
		fetch("http://localhost:3001/")
			.then(response => {
				return response.json()
			})
			.then(json => {
				json.forEach(paciente => {
					this.setState(state => ({
						pacientes: state.pacientes.concat(paciente)
					}))
				})
			})
	}

	componentDidMount() {
		this.updateComponent()
	}

	render() {
		return (
			<Wrapper> 
				{this.state.pacientes.map((item, index) => (
					<div key={index}>
						<PacienteBox key={index} src={Foto} nome={item.nome} sexo={item.sexo} idade={item.dataNascimento}/>
						<AcaoRapida />
					</div>
				))}
			</Wrapper>
		)
	}
}

export default PacientesLista