import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp' //You have to immport the logo image
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
  return (
    // Makes things horizontally stacked
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize={"60px"}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar