import initialState from "../initialState";
import * as types from '../actions/actionsTypes';

export default function queryBuilderReducer(state = initialState.buildQuery, action) {
	switch (action.type) {
		case types.LOAD_LAYERS_SUCCESS:
			return Object.assign({}, state, {layers: action.layers});
		default:
			return state;
	}
}
