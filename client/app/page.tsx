'use client'
import Navbar from "@/components/Layout/Navbar"
import './fonts.css'
import Footer from '@/components/Layout/Footer'
import { Flex, Text } from '@chakra-ui/react'
import Header from "@/components/Layout/Header"

export default function Home() {
  return (
      <Flex direction="column" minH="100vh">
      <Navbar/>
      <Header/>
      <Flex flex="1" align="center" justify="center">
        <Text{...styles.text}>Todo...</Text>
      </Flex>
      <Footer/>
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
