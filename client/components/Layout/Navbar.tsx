import { Flex, IconButton } from "@chakra-ui/react";
import VideoIcon from '@/app/images/video.svg'
import ShopIcon from '@/app/images/shopping.svg'
import WeatherIcon from '@/app/images/weather.svg'

export default function Navbar() {
    return (
        <Flex  as="nav" align="left" justify="space-evenly" padding={10}>
           <IconButton icon={<VideoIcon />} boxSize={10} aria-label={"video-icon"}/>
           <IconButton icon={<ShopIcon />} boxSize={10} aria-label={"shop-icon"}/>
           <IconButton icon={<WeatherIcon />} boxSize={10} aria-label={"weather-icon"}/>
        </Flex>
    );
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