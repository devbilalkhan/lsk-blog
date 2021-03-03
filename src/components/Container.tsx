import { Box, BoxProps } from '@chakra-ui/react'
interface ContainerProps {
  main?: boolean
}
const Container: React.FC<ContainerProps & BoxProps> = ({ children, main = false, ...rest }) => {
  return (
    <>
      <Box maxW={{ base: '100%', xl: '1280px' }} mx="auto" flexGrow={main ? 1 : 0} {...rest}>
        {children}
      </Box>
    </>
  )
}

export default Container
