import React from "react"
import styled from "styled-components"

const TituloStyled = styled.h3`
	grid-area:titulo;
`

const Titulo = ({titulo, className}) => {
	return (
		<TituloStyled className={className}>
			{titulo}
		</TituloStyled>
	)
}
export default Titulo