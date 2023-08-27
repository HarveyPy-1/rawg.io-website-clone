import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


// We downloaded the list of genres locally and just pass it to the website to reduce loading time and data, since it hardly changes.
// Don't be confused, the genre is the id name. The name, is the genre name.

const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres;