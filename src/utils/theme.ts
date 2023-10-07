import { extendTheme } from '@chakra-ui/react';

const fonts = {
  body: `'Manrope', sans-serif`,
  heading: `'Manrope', sans-serif`,
}

const colors = {

}

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts,
  styles: {
    global: {
      body: {
        bg: '#d8ccb3',
        color: '#1A090D',
      },
      a: {
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "400",
        // color: 'white',
      },
      sizes: {
        lg: {
          fontSize: '2xl',
        },
        md: {
          fontSize: 'md',
        },
        sm: {
          fontSize: 'sm',
        },
      },
    },
    Text: {
      baseStyle: {
        opacity: "0.7",
      },
    },
  },
})