import { Flex, Icon, Text } from "@chakra-ui/react"
import GithubIcon from '@/app/images/github.svg'
import LinkedInIcon from '@/app/images/linkedin.svg'

export default function Footer() {
    return (
        <Flex align="center" justify="space-evenly">
            <Flex align="center" justify="space-evenly" gap={3}>
               <Icon as={GithubIcon} boxSize={6}/>
                <Icon as={LinkedInIcon} boxSize={6}/> 
            </Flex>
            <Text {...styles.text} >Welcome to my web-app portfolio. This application serves as a interactive demonstration of my passion for web development.</Text>
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