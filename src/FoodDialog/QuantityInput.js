import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/tilte';
import { pizzaRed } from '../Styles/colors';

const QuantityInputStyled = styled.input`
	font-size: 20px;
	/* border: 3px solid #ddd; */
	height: 30px;
	width: 30px;
	text-align: center;
	border: none;
	outline: none;
	/* border-radius: 6px; */
`;

const IncrementContainer = styled(Title)`
	display: flex;
	height: 24px;
	align-items: center;
`;

const CounterButton = styled.div`
	width: 23px;
	color: ${pizzaRed};
	font-size: 20px;
	text-align: center;
	cursor: pointer;
	line-height: 23px;
	margin: 0px 10px;
	border: 1px solid ${pizzaRed};
	${({ disabled }) =>
		disabled &&
		`opacity: 0.5; 
     pointer-events: none; 
     `}
	&:hover {
		background-color: #ffe3e3;
	}
`;

function QuantityInput({ quantity }) {
	return (
		<IncrementContainer>
			<div>Quantity:</div>
			<CounterButton
				onClick={() => {
					quantity.setValue(quantity.value - 1);
				}}
				disabled={quantity.value === 1}
			>
				-
			</CounterButton>
			<QuantityInputStyled {...quantity} />
			<CounterButton
				onClick={() => {
					quantity.setValue(quantity.value + 1);
				}}
			>
				+
			</CounterButton>
		</IncrementContainer>
	);
}

export default QuantityInput;
