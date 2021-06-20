import React from 'react';
import styled from 'styled-components';
import {FoodLabel} from "../Menu/FoodGrid"

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
`;

const DialogBanner = styled.div`
	min-height: 200px;
	background-position: center;
	background-size: cover;
	margin-bottom: 20px;
	${({ img }) => `background-image: url(${img})`}
`;

const DialogBannerLabel=styled(FoodLabel)`
 font-size: 30px;
`

const FoodDialog = ({ openFood, setOpenFood }) => {
	return openFood ? (
		<>
			<DialogShadow onClick={() => setOpenFood(null)} />
			<Dialog>
				<DialogBanner img={openFood.img} >
          <DialogBannerLabel>{openFood.name}</DialogBannerLabel>
        </DialogBanner>
			</Dialog>
		</>
	) : null;
};

export default FoodDialog;
