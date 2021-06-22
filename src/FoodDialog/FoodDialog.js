import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../Styles/colors';
import { formatPrice } from '../Data/foodData';
import QuantityInput from './QuantityInput';
import { useQuantity } from '../hooks/useQuantity';
import { Toppings } from './Toppings';
import { useToppings } from '../hooks/useToppings';
import { useChoice } from '../hooks/useChoices';
import { Choices } from './Choices';

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
	${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
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
	padding-bottom: 60px;
`;

export const DialogFooter = styled.div`
	height: 60px;
	text-align: center;
	box-shadow: 0px -2px 15px 3px grey;
`;

export const ConfirmBtn = styled.button`
	margin: 10px;
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
	${({ disabled }) =>
		disabled &&
		`
    background-color: #ddd; 
    pointer-events: none; 
  `}
`;

const pricePerTopping = 0.5; //PRICE FOR EACH TOPPING

export const getPrice = order => {
	return (
		order.quantity *
		(order.price +
			order.toppings.filter(t => t.checked).length * pricePerTopping)
	);
};

function hasToppings(food) {
	return food.section === 'Pizza';
}

const FoodDialogContainer = ({ openFood, setOpenFood, setOrders, orders }) => {
	const quantity = useQuantity(openFood && openFood.quantity);
	const toppings = useToppings(openFood.toppings);
	const choiceRadio = useChoice(openFood.choice);
	const order = {
		...openFood,
		quantity: quantity.value,
		toppings: toppings.toppings,
		choice: choiceRadio.value,
	};

	const closeDialog = () => {
		setOpenFood();
	};

	const addToOrder = () => {
		setOrders([...orders, order]);
		closeDialog();
	};

	return openFood ? (
		<>
			<DialogShadow onClick={closeDialog} />
			<Dialog>
				<DialogBanner img={openFood.img}>
					<DialogBannerLabel>{openFood.name}</DialogBannerLabel>
				</DialogBanner>
				<DialogContent>
					<QuantityInput quantity={quantity} />
					{hasToppings(openFood) && (
						<>
							<h3>Would you like extra toppings?</h3>
							<Toppings {...toppings} />
						</>
					)}
					{openFood.choices && (
						<Choices openFood={openFood} choiceRadio={choiceRadio} />
					)}
				</DialogContent>
				<DialogFooter>
					<ConfirmBtn
						onClick={addToOrder}
						disabled={openFood.choices && !choiceRadio.value}
					>
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
