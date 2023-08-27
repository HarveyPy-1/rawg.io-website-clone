import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

// Provides dynamic naming of the page as per user interactions
interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const heading = `${gameQuery.platform?.name || ""} ${
		gameQuery.genre?.name || ""
	} Games`;
	return (
		<Heading as="h1" marginX={5} marginY={5} fontSize={"4xl"}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
