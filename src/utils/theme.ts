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
        bg: "#000000",
        color: "#ffffff",
      },
      a: {
        _hover: {
          textDecoration: "underline",
        },
      },
      "@keyframes colorChange": {
        "0%": {
          fill: "rgb(240, 150, 243)",
        },
        "25%": {
          fill: "rgb(128, 120, 249)",
        },
        "50%": {
          fill: "green",
        },
        "75%": {
          fill: "orange",
        },
        "100%": {
          fill: "rgb(240, 150, 243)",
        },
      },
      "@keyframes fade-in": {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 100,
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
