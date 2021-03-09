import {
  Link as ChakraLink,
  Box,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  useColorMode,
  IconButton,
} from '@chakra-ui/react'
import { IBlogs } from '../types'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import React from 'react'

const Card: React.FC<IBlogs> = (blogs: IBlogs) => {
  const { colorMode } = useColorMode()
  const [overlay, setOverlay] = React.useState<boolean>(false)

  return (
    <Link href={blogs.metaLinks} passHref>
      <ChakraLink
        isExternal
        _hover={{ textDecoration: 'none' }}
        _focus={
          colorMode === 'dark'
            ? { border: '2px solid white', borderRadius: '0.6em' }
            : { border: '2px solid black', borderRadius: '0.6em' }
        }
        onMouseOver={() => setOverlay(true)}
        onMouseLeave={() => setOverlay(false)}
        // _active={{ border: '2px solid black' }}
      >
        <Box
          boxShadow="xl"
          rounded="md"
          overflowX="hidden"
          minH={800}
          stretch={0}
          maxW={450}
          mx="auto"
          pb={12}
          bg={colorMode === 'dark' ? 'gray.700' : 'white'}
          _hover={
            colorMode === 'dark'
              ? { backgroundColor: 'gray.900' }
              : { backgroundColor: 'orange.50' }
          }
        >
          <SimpleGrid columns={{ base: 1 }} gap={6}>
            <Box
              rounded="md"
              style={
                overlay
                  ? { transform: 'scale(1.1)', transition: 'tranform 400ms easeOut' }
                  : { transform: 'scale(1)', transition: 'transform 400ms easeOut' }
              }
            >
              <Image src={blogs.thumbnails} width={450} height={320} />
            </Box>
            <Box px={8} mt={6}>
              <SimpleGrid gap={6}>
                <Heading as="h2" size="md" fontWeight="semibold">
                  {blogs.title}
                </Heading>
                <Text>By {blogs.author}</Text>
                <Flex justify="space-between">
                  <Text fontSize="0.9rem" color="gray.400">
                    {blogs.metaCategory}
                  </Text>
                  <Text fontSize="0.9rem" color="gray.400">
                    {blogs.metaCommentCount}
                  </Text>
                </Flex>
                <Text fontWeight="regular">{blogs.metaContent}</Text>
                <Flex justify="space-between">
                  <Text fontSize="0.9rem" color="gray.400">
                    {blogs.creationDate}
                  </Text>
                  <Text fontSize="0.9rem" color="gray.400">
                    Read
                    <IconButton bg="none" aria-label="Read blog link" icon={<BsArrowRight />} />
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Box>
      </ChakraLink>
    </Link>
  )
}

export default Card
