import React from 'react';
import styled from 'styled-components';
import {FoodGrid, FoodItem, FoodLabel} from "./FoodGrid"
import { foodItems } from '../Data/foodData';

const MenuStyled = styled.div`
	/* border: 3px solid black; */
	height: 550px;
	margin: 0px 400px 50px 20px;
`;

function Menu() {
	return (
		<MenuStyled>
			<h1>Our Menu</h1>
			<FoodGrid>
				{foodItems.map(food => (
					<FoodItem img={food.img}>
						<FoodLabel>{food.name}</FoodLabel>
					</FoodItem>
				))}
			</FoodGrid>
		</MenuStyled>
	);
}

export default Menu;
