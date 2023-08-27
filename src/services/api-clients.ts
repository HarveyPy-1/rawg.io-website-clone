import axios from "axios";

// STORES API KEY AND ENDPOINT

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: apiKey,
	},
});
