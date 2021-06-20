import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/tilte';

const NavbarStyled = styled.div`
	background-color: ${pizzaRed};
	padding: 10px 5vh;
	position: fixed;
	width: 100%;
`;

const Logo = styled(Title)`
	font-size: 30px;
	color: white;
	text-shadow: 2px 2px 4px black;
`;

function Navbar() {
	return (
		<NavbarStyled>
			<Logo>SliceLine</Logo>
		</NavbarStyled>
	);
}

export default Navbar;
