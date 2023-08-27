import { Flex, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GenreDropDown from "./components/GenreDropDown";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`, // Larger than 1024px
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}>
				<GridItem area="nav">
					<NavBar
						onSearch={(searchText) =>
							setGameQuery({ ...gameQuery, searchText })
						}></NavBar>
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" paddingX={5}>
						<GenreList
							selectedGenre={gameQuery.genre}
							onselectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						/>
					</GridItem>
				</Show>
				<GridItem area="main">
					<GameHeading gameQuery={gameQuery} />

					<Flex
						justifyItems={"left"}
						paddingX="20px"
						wrap={"wrap"}
						marginBottom={2}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) =>
								setGameQuery({ ...gameQuery, platform })
							}
						/>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
						<Show below="lg">
							<GenreDropDown
								selectedGenre={gameQuery.genre}
								onselectGenre={(genre) =>
									setGameQuery({ ...gameQuery, genre })
								}></GenreDropDown>
						</Show>
					</Flex>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
			<Flex justifyContent="center" marginBottom={3}>
				<Text as="h2">Harvey Productions ©️2023. </Text>
			</Flex>
		</>
	);
}

export default App;
