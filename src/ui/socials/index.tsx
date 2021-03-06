import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaFacebookSquare } from 'react-icons/fa'
import { CgInstagram } from 'react-icons/cg'
interface indexProps {}

export const Socials: React.FC<indexProps> = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      position="fixed"
      left="20px"
      zIndex="2"
      w={10}
      top="35vh"
      display={{ base: 'none', md: 'block' }}
    >
      <IconButton
        bg="none"
        color={colorMode === 'dark' ? 'whiteAlpha.500' : 'gray.800'}
        icon={<SiTwitter />}
        aria-label="twitter icon button"
      />
      <IconButton
        bg="none"
        color={colorMode === 'dark' ? 'whiteAlpha.500' : 'gray.800'}
        icon={<FaFacebookSquare />}
        aria-label="Facebook icon button"
      />
      <IconButton
        bg="none"
        color={colorMode === 'dark' ? 'whiteAlpha.500' : 'gray.800'}
        icon={<CgInstagram />}
        aria-label="Instagram icon button"
      />
    </Box>
  )
}
