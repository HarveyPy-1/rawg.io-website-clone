import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
	params: {
		key: "71b63322058048929b558d407c3bebfc",
	},
});