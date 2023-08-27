import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) //Typescript doesn't allow empty objects passed as state arguments, hence the 'as GameQuery'
	return (
		// Check out HTML Grid
		<Grid
			// This is just like mediaquery. Check out chakra's documentation to understand more
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, // Larger than 1024px
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr'
			}}
			>
			<GridItem area="nav">
				<NavBar></NavBar>
			</GridItem>
      {
        // Show helps to determine which component shows at which condition (Documentation)
      }
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList selectedGenre={gameQuery.genre} onselectGenre={(genre) => setGameQuery({...gameQuery,genre})}/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<HStack spacing={-5} marginBottom={3}>
					<PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
					<SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
