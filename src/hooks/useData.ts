import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";

//CUSTOM HOOK TO HANDLE BOTH FETCHING useGENRE AND useGAMES TO AVOID CODE REPETITION


interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);

		apiClients
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
			.then((res) => {
				setData(res.data.results);
				setLoading(false);
			})
			// It shows 'canceled' unless you add the 'if' statement
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		// Clean up code
		return () => controller.abort();
	}, [endpoint]);

	return { data, error, isLoading };
};

export default useData;
