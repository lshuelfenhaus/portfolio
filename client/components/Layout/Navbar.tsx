import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import VideoIcon from '@/app/images/video.svg'
import ShopIcon from '@/app/images/shopping.svg'
import WeatherIcon from '@/app/images/weather.svg'

export default function Navbar() {
    return (
        <Flex  as="nav" align="left" justify="space-evenly" padding={10}>
            <Flex direction="column" align="center">
                 <IconButton icon={<VideoIcon />} boxSize={10} aria-label={"video-icon"}/>
                <Text {...styles.text}>Video Conferance Room</Text>
            </Flex>
            <Flex direction="column" align="center">
                <IconButton icon={<ShopIcon />} boxSize={10} aria-label={"shop-icon"}/>
                <Text {...styles.text}>Shopping Cart</Text>
            </Flex> 
           <Flex direction="column" align="center">
            <IconButton icon={<WeatherIcon />} boxSize={10} aria-label={"weather-icon"}/>
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