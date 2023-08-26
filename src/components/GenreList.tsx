import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onselectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onselectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (isLoading) return <Spinner />;

	if (error) return null;
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
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
	);
};

export default GenreList;
