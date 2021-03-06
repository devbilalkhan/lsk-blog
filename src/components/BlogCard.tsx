import { Box } from '@chakra-ui/react'
import Container from '@/src/components/Container'

interface BlogCardProps {
  data: { [key: string]: string }[]
}

export const BlogCard: React.FC<BlogCardProps> = ({ children, data }) => {
  return (
    <Box mt={16}>
      <Container w={['90%', null, '80%', '80%']}>
        <Box h={60} rounded="md">
          {children}
          {/* {data[0].title} */}
        </Box>
      </Container>
    </Box>
  )
}
