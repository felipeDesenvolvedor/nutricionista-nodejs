import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    position: relative;
    font-size: 16px;
    background-color: #f3902c;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-rigth-radius: 4px;
    border-top-rigth-radius: 4px;
    margin: 10px auto;
    float: left;    
`

const Pacienteimg = styled.img.attrs((props) =>({
	src:props.src
}))`
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-rigth-radius: 4px;
    border-top-rigth-radius: 4px;
    width: 100%;
`

const PacienteDados = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:20px;
`

const PacienteNome = styled.span``
const PacienteSexo = styled.span``
const PacienteIdade = styled.span``

const PacienteBox = ({src, nome, sexo, idade}) => {
	return (
		<Wrapper>
			<Pacienteimg src={src}/>
			<PacienteDados>
				<PacienteNome>{nome}</PacienteNome>
				<PacienteSexo>{sexo}</PacienteSexo>
				<PacienteIdade>{idade}</PacienteIdade>
			</PacienteDados>
		</Wrapper>   
	)
}

export default PacienteBox

