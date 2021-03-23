import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const MenuStyled = styled.nav`
	grid-area:menu;
`

const Menu = ({className}) => {
	return (
		<MenuStyled className={className} >
			<ul>
				<li>
					<Link to="#">operações</Link>
				</li>
				<li>
					<Link to="/pacientes">Pacientes</Link>
				</li>
				<li>
					<Link to="/alimentos">Alimentos</Link>
				</li>
				<li>
					<Link to="/modelos">Modelos Alimentares</Link>
				</li>
				<li>
					<Link to="/substituicoes">Listas de substituicoes</Link>
				</li>
				<li>
					<Link to="/receitas">Receitas</Link>
				</li>
				<li>
					<Link to="/agendas">Agendas</Link>
				</li>
				<li>
					<Link to="/financeiro">Financeiro</Link>
				</li>
				<li>
					<Link to="/secretarias">Secretaria</Link>
				</li>
				<li>
					<Link to="/configuracoes">Configuracoes</Link>
				</li>
			</ul>
		</MenuStyled>
	)
}

export default Menu