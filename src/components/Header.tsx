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
import Container from '@/src/components/Container'
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box position="sticky" top={0} zIndex="2" py={12} style={{ backdropFilter: 'blur(40px)' }}>
        <Container w={['90%', null, '80%', '80%']}>
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
                    DR.LSK
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
            <Flex
              direction="row-reverse"
              align="center"
              px={4}
              display={{ base: 'none', lg: 'flex' }}
            >
              <Text letterSpacing="5px" fontSize={{ lg: '0.7rem' }}>
                LAURASMITHKHAN@GMAIL.COM
              </Text>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Header
