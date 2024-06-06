import Link from "next/link";
import BackIcon from '@/app/images/back.svg'
import { IconButton } from "@chakra-ui/react";

export default function BackButton() {
    return (
        <Link href={"/"} passHref>
            <IconButton icon={<BackIcon/>} boxSize={10} aria-label="back"/>
        </Link>
    )
}