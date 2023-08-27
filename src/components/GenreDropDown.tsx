import {
	Spinner,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import { BsChevronDown } from "react-icons/bs";

// Loads and displays the Genre dropdown from a static file on smaller screens
interface Props {
	onselectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreDropDown = ({ selectedGenre, onselectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (isLoading) return <Spinner />;

	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedGenre?.name || "Genres"}
			</MenuButton>
			<MenuList>
				{data.map((genre) => (
					<MenuItem key={genre.id} onClick={() => onselectGenre(genre)}>
						{genre.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default GenreDropDown;
