import { Box } from "@chakra-ui/react"
import { ReactNode } from "react";

// This component just helps to bring the game cards and skeleton card together to make sure it can be modified in one place

interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
		// Box is just like a div in chakra ui
		<Box width="300px" borderRadius={10} overflow="hidden">
            {children}
        </Box>
	);
}

export default GameCardContainer