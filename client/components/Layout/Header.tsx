import { Flex, Heading } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex direction="column" align="center">
        <Heading {...styles.text} as="h6">
            This page was developed with React.js, Next.js, Typescript, and love. 
        </Heading>
         </Flex>

    )
}

const styles = {
    header: {
        "fontFamily": "Montserrat",
        "fontWeight": "500",
        "color": "white"
    },
    text: {
        "fontFamily": "Montserrat",
        "fontWeight": "300",
        "color": "white"
    }
}