import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
function App() {
	return (
		// Check out HTML Grid
		<Grid
			// This is just like mediaquery. Check out chakra's documentation to understand more
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, // Larger than 1024px
			}}>
			<GridItem area="nav">
				<NavBar></NavBar>
			</GridItem>
      {
        // Show helps to determine which component shows at which condition (Documentation)
      }
			<Show above="lg">
				<GridItem area="aside">
					Aside
				</GridItem>
			</Show>
			<GridItem area="main">
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
