import useData from "./useData";

// Handles loading the Platform names and passes it on to Platform selector
interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
