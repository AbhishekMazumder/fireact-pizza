import React from 'react';
import styled from 'styled-components';
import {
	DialogContent,
	DialogFooter,
	ConfirmBtn,
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/foodData';
import { getPrice } from '../FoodDialog/FoodDialog';

const OrderStyled = styled.div`
	position: fixed;
	top: 57.5px;
	right: 0;
	width: 350px;
	height: calc(100vh - 57.6px);
	background-color: white;
	z-index: 10;
	box-shadow: 0px 0px 20px 3px grey;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const OrderContent = styled(DialogContent)`
	padding: 20px;
	text-align: center;
`;

const OrderContainer = styled.div`
	padding: 10px 0;
	border-bottom: 2px solid #eee;
	${({ editable }) =>
		editable
			? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
			: `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
	padding: 10px 0;
	display: grid;
	grid-template-columns: 10px 160px 60px 20px;
`;

const DetailItem = styled.div`
	color: gray;
	font-size: 12px;
	font-weight: bold;
`;

function Order({ orders, setOrders, setOpenFood }) {
	const subTotal = orders.reduce((total, order) => {
		return total + getPrice(order);
	}, 0);
	const tax = subTotal * 0.07;
	const total = subTotal + tax;

	// DELETE ITEM FROM ORDER
	const deleteItem = index => {
		const newOrders = [...orders];
		newOrders.splice(index, 1);
		setOrders(newOrders);
	};

	return (
		<OrderStyled>
			{orders.length === 0 ? (
				<OrderContent>Your have no pending order!</OrderContent>
			) : (
				<OrderContent>
					<OrderContainer>Your Order:</OrderContainer>
					{orders.map((order, index) => (
						<OrderContainer editable>
							<OrderItem onClick={() => setOpenFood({ ...order, index })}>
								<div>{order.quantity}</div>
								<div>{order.name}</div>
								<div>{formatPrice(getPrice(order))}</div>
								<div
									style={{
										marginLeft: '50px',
										textAlign: 'center',
										cursor: 'pointer',
										color: 'red',
										fontWeight: 'bolder',
									}}
									onClick={e => {
										e.stopPropagation();
										deleteItem(index);
									}}
								>
									X
								</div>
							</OrderItem>
							<DetailItem>
								{order.toppings
									.filter(t => t.checked)
									.map(topping => topping.name)
									.join(', ')}
							</DetailItem>
							{order.choice && <DetailItem>{order.choice}</DetailItem>}
						</OrderContainer>
					))}
					<OrderContainer>
						<OrderItem>
							<div />
							<div>Sub-Total</div>
							<div>{formatPrice(subTotal)}</div>
						</OrderItem>
						<OrderItem>
							<div />
							<div>Tax</div>
							<div>{formatPrice(tax)}</div>
						</OrderItem>
						<OrderItem>
							<div />
							<div>Total</div>
							<div>{formatPrice(total)}</div>
						</OrderItem>
					</OrderContainer>
				</OrderContent>
			)}
			<DialogFooter>
				<ConfirmBtn disabled={orders.length < 1}>checkout</ConfirmBtn>
			</DialogFooter>
		</OrderStyled>
	);
}

export default Order;
