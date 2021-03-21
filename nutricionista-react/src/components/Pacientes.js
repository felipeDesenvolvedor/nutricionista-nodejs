import React from "react";

class Pacientes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pacientes: []
        }
        this.updateComponent = this.updateComponent.bind(this)
    }

    updateComponent() {
        fetch('http://localhost:3001/')
        .then(response => {
            return response.json()
        })
        .then(json => {
            json.forEach(paciente => {
                this.setState(state => {
                    return state.pacientes.push(paciente);
                })
            })
        })
    }

    render() {
        this.updateComponent()
        console.log(this.state.pacientes[0])

        return (
            <div>
                `${this.state.pacientes[0].nome}`
            </div>
        )
    }
}

export default Pacientes;