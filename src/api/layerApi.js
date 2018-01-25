import axios from 'axios';

const baseAddress = 'https://jsonplaceholder.typicode.com';

class LayersApi {
	static getAllLayers() {
		return axios.get(baseAddress + '/posts');
	}
}

export default LayersApi;
