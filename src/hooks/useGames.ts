import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

// We are creating this custom hook to get separation of concerns. GameGrid should only focus on returning markups and handling user interactions. All the other logic for retrieving the games from the url, and other http requests can be separated here.

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

// We had to create this game interface to tell 'results' below, the type of data it should expect.
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[]; //This is just how data from the API is structured. The defined platform interface is inside another array called platform
	metacritic: number;
}

// The interface is based on what the api doc says the response will look like
interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		// <FetchGamesResponse> remember, is necessary for autocomplete purposes.
		apiClients
			.get<FetchGamesResponse>("/games", { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setLoading(false);
			})
			// It shows 'canceled' unless you add the 'if' statement
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
                setLoading(false)
			});

		// Clean up code
		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;
