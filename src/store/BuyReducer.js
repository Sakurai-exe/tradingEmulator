const defaultState = {
	USDEUR_b: 1.0631,
	EURUSD_b: 1.0248,
	RURUSD_b: 0.0142,
	USDRUR_b: 63.0232,
	RUREUR_b: 0.0163,
	EURRUR_b: 73.2435,
};

export const SET_USD_EUR_B = "SET_USD_EUR_B";
export const SET_EUR_USD_B = "SET_EUR_USD_B";
export const SET_RUR_USD_B = "SET_RUR_USD_B";
export const SET_USD_RUR_B = "SET_USD_RUR_B";
export const SET_RUR_EUR_B = "SET_RUR_EUR_B";
export const SET_EUR_RUR_B = "SET_EUR_RUR_B";

export const BuyReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_USD_EUR_B:
			return { ...state, USDEUR_b: action.payload };
		case SET_EUR_USD_B:
			return { ...state, EURUSD_b: action.payload };
		case SET_RUR_USD_B:
			return { ...state, RURUSD_b: action.payload };
		case SET_USD_RUR_B:
			return { ...state, USDRUR_b: action.payload };
		case SET_RUR_EUR_B:
			return { ...state, RUREUR_b: action.payload };
		case SET_EUR_RUR_B:
			return { ...state, EURRUR_b: action.payload };
		default:
			return state;
	}
};
