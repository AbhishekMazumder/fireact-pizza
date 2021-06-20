import styled from 'styled-components';
import { Title } from '../Styles/tilte';

export const FoodGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;

export const FoodItem = styled(Title)`
	height: 100px;
	padding: 10px;
	border-radius: 6px;
	font-size: 20px;
	background-image: ${({ img }) => `url(${img})`};
	background-position: center;
	background-size: cover;
	box-shadow: 2px 3px 12px 0px grey;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`;

export const FoodLabel = styled.div`
	position: absolute;
	padding: 3px;
	background-color: white;
	opacity: 0.8;
	border-radius: 3px;
`;
