import React from "react"
import {Link} from "react-router-dom"


const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home 2</Link>
				</li>
				<li>
					<Link to="/about">About 2</Link>
				</li>
				<li>
					<Link to="/users">Users 2</Link>
				</li>
				<li>
					<Link to="/pacientes">Pacientes 2</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu