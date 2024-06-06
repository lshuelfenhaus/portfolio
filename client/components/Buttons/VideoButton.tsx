import { IconButton } from "@chakra-ui/react";
import VideoIcon from '@/app/images/video.svg'
import Link from "next/link";


export default function VideoButton () {
    return (
        <Link href={"/video"} passHref>
        <IconButton icon={<VideoIcon />} boxSize={10} aria-label={"video-icon"}/>
        </Link>
    )
}