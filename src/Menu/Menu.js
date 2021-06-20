import React from 'react';
import styled from 'styled-components';
import { FoodGrid, FoodItem, FoodLabel } from './FoodGrid';
import { foods } from '../Data/foodData';

const MenuStyled = styled.div`
	/* border: 3px solid black; */
	height: auto;
	margin: 0px 400px 50px 20px;
`;

function Menu() {
	return (
		<MenuStyled>
			{Object.entries(foods).map(([sectionName, foods]) => (
				<>
					<h1>{sectionName}</h1>
					<FoodGrid>
						{foods.map(food => (
							<FoodItem img={food.img}>
								<FoodLabel>{food.name}</FoodLabel>
							</FoodItem>
						))}
					</FoodGrid>
				</>
			))}
		</MenuStyled>
	);
}

export default Menu;
