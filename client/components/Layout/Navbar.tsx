import { Flex, Text } from "@chakra-ui/react";
import WeatherButton from "../Buttons/WeatherButton";
import VideoButton from "../Buttons/VideoButton";
import ShoppingCartButton from "../Buttons/ShoppingCartButton";

export default function Navbar() {
    return (
        <Flex align="center" justify="space-evenly">
            <Flex direction="column" align="center">
                <VideoButton/>
                <Text {...styles.text}>Video Conference</Text>
            </Flex>
            <Flex direction="column" align="center">
                <ShoppingCartButton />
                <Text {...styles.text}>Shopping Cart</Text>
            </Flex> 
           <Flex direction="column" align="center">
                <WeatherButton/>
            <Text {...styles.text}>Local Weather</Text>
            </Flex>
        </Flex>
    );
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