import React from 'react';
import styled from 'styled-components';
import {
	DialogContent,
	DialogFooter,
	ConfirmBtn,
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/foodData';


const OrderStyled = styled.div`
	position: fixed;
	top: 57.5px;
	right: 0;
	width: 350px;
	height: 89vh;
	/* min-height: 100px; */
	/* height: 680px; */
	/* border: 1px solid orange; */
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

const OrderContainer= styled.div`
	padding: 10px 0;
	border-bottom: 2px solid #eee;
`

const OrderItem = styled.div`
padding: 10px 0;
display: grid;
grid-template-columns: 20px 150px 60px 20px;
`

function Order({ orders }) {
	return (
		<OrderStyled>
			{orders.length === 0 ? (
				<OrderContent>Your have no pending order!</OrderContent>
			) : (
				<OrderContent>
					<OrderContainer>Your Order:</OrderContainer>
					{orders.map(order => (
						<OrderContainer>
							<OrderItem>
								<div>1</div>
								<div>{order.name}</div>
								<div>{formatPrice(order.price)}</div>
								<div>delete</div>
							</OrderItem>
						</OrderContainer>
					))}
				</OrderContent>
			)}

			<DialogFooter>
				<ConfirmBtn>checkout</ConfirmBtn>
			</DialogFooter>
		</OrderStyled>
	);
}

export default Order;
