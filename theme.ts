import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// import { createBreakpoints } from '@chakra-ui/theme-tools'

// const breakpoints = createBreakpoints({
//   sm: '40rem',
//   md: '48rem',
//   lg: '64rem',
//   xl: '80rem',
// })

const theme = extendTheme({
  fonts: {
    heading: `'Libby', ${defaultTheme.fonts.heading}`,
    body: `'Poppins', ${defaultTheme.fonts.body}`,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => {
      return {
        body: {
          bg: mode('white', 'gray.500')(props),
        },
      }
    },
  },
})

export default theme
