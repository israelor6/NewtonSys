import layerApi from '../api/layerApi';
import * as types from '../actions/actionsTypes';

export function loadLayersSuccess(layers) {
	return {type: types.LOAD_LAYERS_SUCCESS, layers}
}

export function loadLayers() {
	return function (dispatch) {
		return layerApi.getAllLayers().then(layers => {
			dispatch(loadLayersSuccess(layers.data));
		}, err => {
			throw(err);
		})
	}
}
