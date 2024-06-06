'use client'
import './fonts.css'
import Footer from '@/components/Layout/Footer'
import { Box, Code, Flex, Text } from '@chakra-ui/react'
import Header from "@/components/Layout/Header"
import Body from "@/components/Layout/Body"

export default function Home() {
  return (
      <Flex direction="column" minH="100vh" gap={2} align ="center" >
      <Header/>
      <Flex align="center" justify="center" direction="column">
        <Body/>
      </Flex>
      <Box borderWidth="1px" borderRadius="lg" borderColor="lightgrey" padding={3} width="xl">
                <Text {...styles.text}>
                    Thank you for exploring my web application. I have created three individual applications to play with. 
                    A video conference room using Vonage API, a book recommendation using Google Books API, and a local weather application using Weatherstack API. 
                    I am consistently updating the code to add new functionality. This application was built using Next.js 14 with the <Code>/app</Code> file structure. Enjoy!  </Text>
            </Box>
      <Footer/>
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
