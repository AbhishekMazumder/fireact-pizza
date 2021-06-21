import React from 'react';
import styled from 'styled-components';
import { FoodGrid, FoodItem, FoodLabel } from './FoodGrid';
import { foods } from '../Data/foodData';
import {formatPrice} from "../Data/foodData"

const MenuStyled = styled.div`
	/* border: 3px solid black; */
	height: auto;
	margin: 0px 400px 50px 37px;
	/* margin: 50px 10vw; */
`;

function Menu({ setOpenFood }) {
	return (
		<MenuStyled>
			{Object.entries(foods).map(([sectionName, foods]) => (
				<>
					<h1>{sectionName}</h1>
					<FoodGrid>
						{foods.map(food => (
							<FoodItem img={food.img} onClick={() => setOpenFood(food)}>
								<FoodLabel>
									<div>{food.name}</div>
									<div>{formatPrice(food.price)}</div>
								</FoodLabel>
							</FoodItem>
						))}
					</FoodGrid>
				</>
			))}
		</MenuStyled>
	);
}

export default Menu;
