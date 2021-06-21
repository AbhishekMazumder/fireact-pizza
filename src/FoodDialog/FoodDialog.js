import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../Styles/colors';
import { formatPrice } from '../Data/foodData';
import QuantityInput from './QuantityInput';
import { useQuantity } from '../hooks/useQuantity';

const DialogShadow = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	background-color: black;
	opacity: 0.7;
	z-index: 4;
`;

const Dialog = styled.div`
	width: 500px;
	height: 500px;
	max-height: calc(100%-100px);
	background-color: white;
	position: fixed;
	top: 100px;
	left: calc(50% - 250px);
	z-index: 5;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0px 2px 50px 3px black;
`;

const DialogBanner = styled.div`
	min-height: 200px;
	background-position: center;
	background-size: cover;
	margin-bottom: 20px;
	${({ img }) => `background-image: url(${img})`}
`;

const DialogBannerLabel = styled(FoodLabel)`
	font-size: 28px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
`;

export const DialogContent = styled.div`
	overflow: auto;
	min-height: 100px;
	padding: 10px 40px;
`;

export const DialogFooter = styled.div`
	/* border: 2px solid red; */
	height: 60px;
	text-align: center;
	box-shadow: 0px -2px 15px 3px grey;
`;

export const ConfirmBtn = styled.button`
	margin: 10px;
	/* font-size:15px; */
	background-color: ${pizzaRed};
	font-family: 'Righteous', cursive;
	letter-spacing: 1.3px;
	border: none;
	color: white;
	padding: 10px;
	width: 200px;
	border-radius: 6px;
	cursor: pointer;
	text-transform: uppercase;
`;

export const getPrice = order => {
	return order.quantity * order.price;
};

const FoodDialogContainer = ({ openFood, setOpenFood, setOrders, orders }) => {
	const quantity = useQuantity(openFood && openFood.quantity);
	const order = { ...openFood, quantity: quantity.value };
	const closeDialog = () => {
		setOpenFood();
	};

	console.log(order);

	const addToOrder = () => {
		setOrders([...orders, order]);
		closeDialog();
	};

	console.log(orders);

	return openFood ? (
		<>
			<DialogShadow onClick={closeDialog} />
			<Dialog>
				<DialogBanner img={openFood.img}>
					<DialogBannerLabel>{openFood.name}</DialogBannerLabel>
				</DialogBanner>
				<DialogContent>
					<QuantityInput quantity={quantity} />
				</DialogContent>
				<DialogFooter>
					<ConfirmBtn onClick={addToOrder}>
						Add To Order {formatPrice(getPrice(order))}
					</ConfirmBtn>
				</DialogFooter>
			</Dialog>
		</>
	) : null;
};

export function FoodDialog(props) {
	if (!props.openFood) return null;
	return <FoodDialogContainer {...props} />;
}
