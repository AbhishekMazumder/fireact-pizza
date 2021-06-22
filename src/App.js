import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import Navbar from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import Menu from './Menu/Menu';
import {FoodDialog} from './FoodDialog/FoodDialog';
import Order from './Order/Order';
import { useOpenFood } from './hooks/useOpenFood';
import { useOrders } from './hooks/useOrders';
import { useTitle } from './hooks/useTitle';

function App() {
	const openFood = useOpenFood();
	const orders = useOrders();
	useTitle({ ...openFood, ...orders });
	return (
		<>
			<GlobalStyle />
			<FoodDialog {...openFood} {...orders} />
			<Navbar />
			<Order {...orders} {...openFood} />
			<Banner />
			<Menu {...openFood} />
		</>
	);
}

export default App;
