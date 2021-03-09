import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Container from '@/src/components/Container'
import { IBlogsProps } from '@/src/types'
import React from 'react'
import Card from './Card'

export const BlogCard: React.FC<IBlogsProps> = ({ blogs }) => {
  return (
    <Box my={16}>
      <Container w={['90%', null, '80%', '80%']}>
        <Box rounded="md">
          <Heading as="h2" size="xl" fontWeight="semibold" mb={16}>
            My Blogs
          </Heading>
          <Box mx="auto">
            <SimpleGrid columns={{ base: 1, lg: 2 }} rowGap={8} columnGap={4}>
              {blogs.map((blog, idx) => (
                <Card key={`${blog}${idx}`} {...blog} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
