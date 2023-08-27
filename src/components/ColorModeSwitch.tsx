import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs";
import { PiSunLight } from "react-icons/pi";

// For switching between Dark Mode and Light mode
const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<HStack>
			<Switch
				colorScheme="green"
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
			/>
			<Text>
				{colorMode === "dark" ? (
					<BsFillMoonFill size="18" />
				) : (
					<PiSunLight size="25" color="green" />
				)}
			</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
