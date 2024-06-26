import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Heading {...styles.header} as="h2">
        Welcome to Liz's Web App Wonderland: Explore Our Creative Adventures!! 
        </Heading>

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