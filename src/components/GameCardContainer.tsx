import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

// Brings Game cards and Skeleton cards together for easy management

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		// Box is just like a div in chakra ui
		<Box borderRadius={10} overflow="hidden">
			{children}
		</Box>
	);
};

export default GameCardContainer;
