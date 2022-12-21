const defaultState = {
	USDEUR_s: 1.0931,
	EURUSD_s: 1.0383,
	RURUSD_s: 0.0119,
	USDRUR_s: 65.5436,
	RUREUR_s: 0.0171,
	EURRUR_s: 71.6542,
};

export const SET_USD_EUR_S = "SET_USD_EUR_S";
export const SET_EUR_USD_S = "SET_EUR_USD_S";
export const SET_RUR_USD_S = "SET_RUR_USD_S";
export const SET_USD_RUR_S = "SET_USD_RUR_S";
export const SET_RUR_EUR_S = "SET_RUR_EUR_S";
export const SET_EUR_RUR_S = "SET_EUR_RUR_S";

export const SellReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_USD_EUR_S:
			return { ...state, USDEUR_s: action.payload };
		case SET_EUR_USD_S:
			return { ...state, EURUSD_s: action.payload };
		case SET_RUR_USD_S:
			return { ...state, RURUSD_s: action.payload };
		case SET_USD_RUR_S:
			return { ...state, USDRUR_s: action.payload };
		case SET_RUR_EUR_S:
			return { ...state, RUREUR_s: action.payload };
		case SET_EUR_RUR_S:
			return { ...state, EURRUR_s: action.payload };
		default:
			return state;
	}
};
