import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'
interface StyleOptions {
  colorMode: 'light' | 'dark'
  colorScheme: string
  [k: string]: any
}
const breakpoints: any = createBreakpoints({
  sm: '40em',
  md: '48em',
  lg: '62em',
  xl: '80em',
})

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Libby', ${defaultTheme.fonts.heading}`,
    body: `'Poppins', ${defaultTheme.fonts.body}`,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    blog100: '#f0e8e2',
  },
  components: {
    Button: {
      variants: {
        subtle: (props: StyleOptions) => ({
          bg: `${props.colorScheme}.50`,
          color: `${props.colorScheme}.700`,
          _hover: {
            _disabled: {
              bg: `${props.colorScheme}.50`,
            },
            bg: `${props.colorScheme}.100`,
          },
          _active: {
            bg: `${props.colorScheme}.200`,
          },
        }),
      },
      baseStyle: {
        ...defaultTheme.components.Button.baseStyle,
        _active: {
          transform: 'scale(0.9)',
        },
      },
    },
    Link: {
      variants: {
        'subtle-hover': (props: StyleOptions) => ({
          _hover: {
            color: `${props.colorScheme}.200`,
          },
        }),
      },
    },
    Skeleton: {
      defaultProps: {
        startColor: 'cyan.100',
        endColor: 'purple.200',
      },
    },
  },
  styles: {
    global: (props: any) => {
      return {
        body: {
          bg: mode('white', 'gray.800')(props),
        },
      }
    },
  },
})

export default theme
