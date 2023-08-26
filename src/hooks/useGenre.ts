import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		// <FetchGamesResponse> remember, is necessary for autocomplete purposes.
		apiClients
			.get<FetchGenresResponse>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
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

	return { genres, error, isLoading };
};

export default useGenres;