import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; //You have to immport the logo image
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}

// Navigation Bar
const NavBar = ({ onSearch }: Props) => {
	return (
		// Makes things horizontally stacked
		<HStack padding="10px">
			<a href="/">
				<Image src={logo} boxSize={"60px"} />
			</a>
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
