import { Flex, Text } from "@chakra-ui/react";

export default function Video() {
    return (
        <Flex align="center" direction="column" minH="100vh">
            <Text {...styles.header}>Video App!</Text>
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