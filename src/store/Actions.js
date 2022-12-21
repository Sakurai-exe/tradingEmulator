import { randomRoll } from "./Randomizer";
import {
	SET_USD_EUR_B,
	SET_EUR_USD_B,
	SET_RUR_USD_B,
	SET_USD_RUR_B,
	SET_RUR_EUR_B,
	SET_EUR_RUR_B,
} from "./BuyReducer";
import {
	SET_USD_EUR_S,
	SET_EUR_USD_S,
	SET_RUR_USD_S,
	SET_USD_RUR_S,
	SET_RUR_EUR_S,
	SET_EUR_RUR_S,
} from "./SellReducer";
import { ADD_NEW_ARCHIVE } from "./ArchiveReducer";

//BuyReducer Actions:
export const USD_EURgenBuyAction = () => {
	return {
		type: SET_USD_EUR_B,
		payload: randomRoll(0.8, 1.3),
	};
};
export const EUR_USDgenBuyAction = () => {
	return {
		type: SET_EUR_USD_B,
		payload: randomRoll(1, 1.1),
	};
};
export const RUR_USDgenBuyAction = () => {
	return {
		type: SET_RUR_USD_B,
		payload: randomRoll(0.01, 0.019),
	};
};
export const USD_RURgenBuyAction = () => {
	return {
		type: SET_USD_RUR_B,
		payload: randomRoll(60, 75),
	};
};
export const RUR_EURgenBuyAction = () => {
	return {
		type: SET_RUR_EUR_B,
		payload: randomRoll(0.009, 0.015),
	};
};
export const EUR_RURgenBuyAction = () => {
	return {
		type: SET_EUR_RUR_B,
		payload: randomRoll(70, 80),
	};
};

//SellReducer Actions:
export const USD_EURgenSellAction = () => {
	return {
		type: SET_USD_EUR_S,
		payload: randomRoll(0.6, 1.1),
	};
};
export const EUR_USDgenSellAction = () => {
	return {
		type: SET_EUR_USD_S,
		payload: randomRoll(0.8, 1),
	};
};
export const RUR_USDgenSellAction = () => {
	return {
		type: SET_RUR_USD_S,
		payload: randomRoll(0.008, 0.016),
	};
};
export const USD_RURgenSellAction = () => {
	return {
		type: SET_USD_RUR_S,
		payload: randomRoll(55, 69),
	};
};
export const RUR_EURgenSellAction = () => {
	return {
		type: SET_RUR_EUR_S,
		payload: randomRoll(0.005, 0.013),
	};
};
export const EUR_RURgenSellAction = () => {
	return {
		type: SET_EUR_RUR_S,
		payload: randomRoll(65, 77),
	};
};

//Archive
export const addNewArchive = label => {
	return {
		type: ADD_NEW_ARCHIVE,
		payload: {
			side,
			price,
			instrument,
			volume,
			timestamp,
		},
	};
};
ADD_NEW_ARCHIVE;
