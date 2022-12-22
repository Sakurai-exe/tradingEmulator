import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ArchiveReducer } from "./ArchiveReducer";
import { BuyReducer } from "./BuyReducer";
import { SellReducer } from "./SellReducer";

const rootReducer = combineReducers({
	buy: BuyReducer,
	sell: SellReducer,
	archive: ArchiveReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
