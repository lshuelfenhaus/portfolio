import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import ShopIcon from '@/app/images/shopping.svg'


export default function ShoppingCartButton () {
    return (
        <Link href={"/shopping-cart"} passHref>
                <IconButton icon={<ShopIcon />} boxSize={10} aria-label={"shop-icon"}/>
                </Link>
    )
}