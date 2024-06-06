import { IconButton } from "@chakra-ui/react";
import WeatherIcon from '@/app/images/weather.svg'
import Link from "next/link";


export default function WeatherButton () {
    return (
        <Link href={"/weather"} passHref>
        <IconButton icon={<WeatherIcon />} boxSize={10} aria-label={"video-icon"}/>
        </Link>
    )
}