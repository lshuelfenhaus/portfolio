import { Box, Code, Flex, Text } from "@chakra-ui/react";
import LottieControl from "../Animations/LottieControl";
import Navbar from "./Navbar";

export default function Body() {
    return (
        <Flex direction="column">
            <Box boxSize="lg">
                <LottieControl/>
            </Box>
            <Navbar/>
        </Flex>
    )
}

const styles = {
    header: {
        "fontFamily": "Montserrat",
        "fontWeight": "500",
        "color": "black"
    },
    text: {
        "fontFamily": "Montserrat",
        "fontWeight": "300",
        "color": "black"
    }
}