import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
	return (
		// Check out HTML Grid
		<Grid
			// This is just like mediaquery. Check out chakra's documentation to understand more
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, // Larger than 1024px
			}}>
			<GridItem area="nav" bg="coral">
				Nav
			</GridItem>
      {
        // Show helps to determine which component shows at which condition (Documentation)
      }
			<Show above="lg">
				<GridItem area="aside" bg="gold">
					Aside
				</GridItem>
			</Show>
			<GridItem area="main" bg="dodgerblue">
				Main
			</GridItem>
		</Grid>
	);
}

export default App;
