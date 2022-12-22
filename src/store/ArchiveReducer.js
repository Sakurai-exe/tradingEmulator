const defaultState = [];

export const ADD_NEW_ARCHIVE = "ADD_NEW_ARCHIVE";

export const ArchiveReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_NEW_ARCHIVE:
			return [
				...state,
				{
					side: action.payload.side,
					price: action.payload.price,
					instrument: action.payload.instrument,
					volume: action.payload.volume,
					timestamp: action.payload.timestamp,
				},
			];
		default:
			return state;
	}
};
