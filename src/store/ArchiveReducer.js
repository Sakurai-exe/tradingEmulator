const defaultState = [
	{
		side: "Sell",
		price: 1.2134,
		instrument: "USD/EUR TOM",
		volume: 10321,
		timestamp: "2022.03.20 13:55:23",
	},
];

export const ADD_NEW_ARCHIVE = "ADD_NEW_ARCHIVE";
// export const SET_EUR_USD_B = "SET_EUR_USD_B";
// export const SET_RUR_USD_B = "SET_RUR_USD_B";
// export const SET_USD_RUR_B = "SET_USD_RUR_B";
// export const SET_RUR_EUR_B = "SET_RUR_EUR_B";
// export const SET_EUR_RUR_B = "SET_EUR_RUR_B";

export const ArchiveReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_NEW_ITEM:
			const newArchive = {
				side: payload.side,
				price: payload.id,
				instrument: payload.instrument,
				volume: payload.volume,
				timestamp: payload.timestamp,
			};
			return [...state, newArchive];
		default:
			return state;
	}
};
