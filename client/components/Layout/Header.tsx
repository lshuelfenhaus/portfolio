import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex direction="column" align="center" gap={5} paddingTop={10} paddingBottom={20}>
        <Heading {...styles.header} as="h2">
        Welcome to Liz's Web App Wonderland: Explore Our Creative Adventures!! 
        </Heading>
        <Heading as="h6" {...styles.text}>This page was developed with React.js, Next.js, Typescript, and love.</Heading>
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