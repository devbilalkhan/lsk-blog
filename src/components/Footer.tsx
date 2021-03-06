import { Box, Flex, Icon, Link as ChakraLink, Stack, StackDivider, Text } from '@chakra-ui/react'
import Container from '@/src/components/Container'
import { useState } from 'react'
import { FiGlobe, FiHeart, FiMail } from 'react-icons/fi'

const Footer: React.FC = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      w="100%"
      bg="gray.900"
      fontSize="sm"
      color="whiteAlpha.900"
      position="absolute"
      bottom="0"
    >
      <Container opacity={hovered ? 1 : 0.6} transition="all 100ms linear">
        <Flex p={4} flexWrap="wrap">
          <Text flexGrow={1}>
            Made with <Icon as={FiHeart} fill="red.500" stroke="red.500" /> by{' '}
            <ChakraLink as="a" href="https://mainframe.studio">
              Mainframe Studio
            </ChakraLink>
          </Text>
          <Stack
            justify="flex-end"
            divider={
              <StackDivider borderColor="whiteAlpha.500" display={{ base: 'none', sm: 'block' }} />
            }
            direction={{ base: 'column', sm: 'row' }}
          >
            <ChakraLink as="a" href="https://mainframe.studio">
              <Icon as={FiGlobe} mr={1} />
              mainframe.studio
            </ChakraLink>
            <ChakraLink as="a" href="mailto:contact@mainframe.studio">
              <Icon as={FiMail} mr={1} />
              contact@mainframe.studio
            </ChakraLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
