import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import { Fragment } from "react";

// Loads and displays the Genre list from a static file
interface Props {
	onselectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onselectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (isLoading) return <Spinner />;

	if (error) return null;
	return (
		<Fragment>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								textDecoration={
									genre.id === selectedGenre?.id ? "underline" : "none"
								}
								onClick={() => onselectGenre(genre)}
								variant="link">
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</Fragment>
	);
};

export default GenreList;
