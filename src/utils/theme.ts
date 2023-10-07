import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

export const theme = extendTheme({
  fonts,
  styles: {
    global: {
      body: {
        fontSize: "sm",
        bg: "#ffffff",
        color: "#1A090D",
      },
      a: {
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "400",
      },
      sizes: {
        lg: {
          fontSize: "2xl",
        },
        md: {
          fontSize: "sm",
        },
        sm: {
          fontSize: "xs",
        },
      },
    },
    Text: {
      baseStyle: {
        opacity: "0.7",
      },
    },
  },
});
