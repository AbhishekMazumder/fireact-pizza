import styled from 'styled-components';
import { Title } from '../Styles/tilte';

export const FoodGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;

export const FoodItem = styled.div`
	height: 120px;
	padding: 10px;
	border-radius: 6px;
	font-size: 20px;
	margin-top: 5px;
	background-image: ${({ img }) => `url(${img})`};
	background-position: center;
	background-size: cover;
	filter: contrast(85%);
	box-shadow: 2px 3px 10px 0px grey;
	transition: all 0.2s linear;
	&:hover {
		cursor: pointer;
		box-shadow: 2px 3px 15px 0px black;
		filter: contrast(100%);
		margin-top: 0px;
		margin-bottom: 5px;
	}
`;

export const FoodLabel = styled(Title)`
	position: absolute;
	padding: 3px;
	background-color: white;
	opacity: 0.8;
	border-radius: 3px;
`;
