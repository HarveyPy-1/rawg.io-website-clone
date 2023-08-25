import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp' //You have to immport the logo image

const NavBar = () => {
  return (
    // Makes things horizontally stacked
    <HStack>
        <Image src={logo} boxSize={"60px"}/>
        <Text>Nav Bar</Text>
    </HStack>
  )
}

export default NavBar