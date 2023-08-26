import useData from "./useData";

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


const useGames = () => useData<Game>('/games')

export default useGames;
