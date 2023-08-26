import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { useEffect, useState } from "react";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	// const [colorMode, setColorMode] = useState(
	// 	localStorage.getItem("chakra-ui-color-mode")
	// );

	// useEffect(() => {
	// 	const handleStorageChange = () => {
	// 		setColorMode(localStorage.getItem("chakra-ui-color-mode"));
	// 	};

	// 	window.addEventListener("storage", handleStorageChange)

	// 	return () ={
	// 		window.removeEventListener("storage", handleStorageChange)
	// 	}
	// }, []);

	const getColorMode = () => {
		return localStorage.getItem("chakra-ui-color-mode");
	}

	const colorMode = getColorMode();

	return (
		<Card backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between">
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize={"2xl"}>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
