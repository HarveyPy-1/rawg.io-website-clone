import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// Provides loading animation in the style of the cards
const GameCardSkeleton = () => {
	return (
		<Card>
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
