import Link from 'next/link'
import {
  Box,
  SimpleGrid,
  Heading,
  IconButton,
  Text,
  Link as ChakraLink,
  Flex,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import { IoMdMoon } from 'react-icons/io'
import { BiSun } from 'react-icons/bi'
import Container from '@/components/Container'
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box position="sticky" top={0} zIndex="2" py={12}>
        <Container>
          <SimpleGrid columns={3}>
            <Flex align="center" px={4}>
              <Link href="/" passHref>
                <ChakraLink>
                  <Heading
                    as="h1"
                    fontSize="1.3rem"
                    fontWeight={colorMode === 'dark' ? 'regular' : 'bold'}
                    letterSpacing="10px"
                  >
                    LSK
                  </Heading>
                </ChakraLink>
              </Link>
            </Flex>
            <Box align="center" justify="center">
              <IconButton
                onClick={toggleColorMode}
                icon={colorMode === 'dark' ? <BiSun /> : <IoMdMoon />}
                aria-label="toggle light and dark mode"
                _focus={{ border: '2px' }}
              />
            </Box>
            <Flex direction="row-reverse" px={4} align="center">
              <Text letterSpacing="5px">LAURASMITHKHAN@GMAIL.COM</Text>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Header
