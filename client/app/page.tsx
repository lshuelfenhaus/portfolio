'use client'
import Navbar from "@/components/Layout/Navbar"
import './fonts.css'
import Footer from '@/components/Layout/Footer'
import { Flex, Text } from '@chakra-ui/react'
import Header from "@/components/Layout/Header"
import Body from "@/components/Layout/Body"

export default function Home() {
  return (
      <Flex direction="column" minH="100vh">
      <Header/>
      <Navbar/>
      <Flex flex="1" align="center" justify="center" direction="column">
        <Body/>
      </Flex>
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
