import { Box, SimpleGrid, Image, Heading, useColorMode, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Container from './Container'
// import Image from 'next/image'
interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  const { colorMode } = useColorMode()
  return (
    <Box>
      <Container w={['90%', null, '80%', '80%']}>
        <Box px={4} py={{ base: 'none', lg: 12 }}>
          <SimpleGrid columns={{ sm: 1, lg: 2 }} gap={32}>
            <Flex direction="column" align={{ base: 'center', lg: 'start' }} my="auto">
              <Box align="center" display={{ sm: 'flex', lg: 'none' }} mb={8}>
                <Image src="./character.svg" boxSize="300px" transform="scaleX(-1)" />
              </Box>
              <Heading
                as="h1"
                fontWeight={colorMode === 'dark' ? 'semibold' : 'semibold'}
                fontSize={{ base: '1.5rem', lg: '1.6rem', xl: '1.6rem' }}
                letterSpacing="0px"
                mb={6}
              >
                Dr Laura Smith-Khan
              </Heading>
              <Heading
                mb={20}
                as="h2"
                fontWeight="semibold"
                size="lg"
                letterSpacing="30x"
                color={colorMode === 'dark' ? 'pink.300' : 'pink.500'}
              >
                My Personal Blogs!
              </Heading>
              <Button
                py={6}
                px={20}
                //   fontWeight="semibold"
                //   fontSize="1.2rem"
                //   bg={colorMode === 'dark' ? 'purple.600' : 'purple.400'}
                //   color="white"
                //   letterSpacing="3px"
                //   boxShadow="xl"
                variant="subtle"
              >
                Get In Touch
              </Button>
            </Flex>
            <Box align="center" mx="auto" justify="center" display={{ base: 'none', md: 'flex' }}>
              <Image
                src="./character.svg"
                boxSize={{ md: '300px', lg: '400px' }}
                transform="scaleX(-1)"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
