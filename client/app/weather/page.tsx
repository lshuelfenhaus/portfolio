'use client'
import BackButton from "@/components/Buttons/BackButton";
import Footer from "@/components/Layout/Footer";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Weather() {
    return (
        <Flex direction="column">
            <Flex direction="row" align="center" justify="space-between">
            <Flex direction="row" align="center" gap={2} >
                <BackButton/>
                <Text {...styles.text}>Go Home</Text>
            </Flex>
                <Heading {...styles.header}>Local Weather App</Heading>
            </Flex>
            <Flex justify="center" align="center" flexGrow="1">
                 <Box borderWidth="3px" borderRadius="lg" borderColor="lightgrey" height="lg" width="xl">
                    
                </Box>
            </Flex>
            <Footer/>
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