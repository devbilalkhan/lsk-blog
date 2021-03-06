import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../../theme'
import { ColorModeScript } from '@chakra-ui/react'
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
