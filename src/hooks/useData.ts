import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";

//CUSTOM HOOK TO HANDLE BOTH FETCHING useGENRE AND useGAMES TO AVOID CODE REPETITION

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: unknown[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();

			setLoading(true);

			apiClients
				.get<FetchResponse<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((res) => {
					setData(res.data.results);
					setLoading(false);
				})

				.catch((err) => {
					if (err instanceof CanceledError) return;
					setError(err.message);
					setLoading(false);
				});

			return () => controller.abort();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		deps ? [endpoint, ...deps] : [endpoint]
	);

	return { data, error, isLoading };
};

export default useData;
