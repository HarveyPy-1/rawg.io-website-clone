import genres from "../data/genres";

// Loads genre from static file and passes it to GenreList
export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
