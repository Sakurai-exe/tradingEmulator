import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BuyReducer } from "./BuyReducer";
import { SellReducer } from "./SellReducer";

const rootReducer = combineReducers({
	buy: BuyReducer,
	sell: SellReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
