import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

const styles = {
  global: {
    body: {
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
}

const components = {
  Heading: {
    baseStyle: {
      fontSize: ["2xl", "sm"],
      fontWeight: "400",
    },
    sizes: {
      lg: {
        fontSize: ["xl", "2xl"],
      },
      md: {
        fontSize: ["sm", "md"],
      },
      sm: {
        fontSize: ["xs", "sm"],
      },
    },
  },
  Text: {
    baseStyle: {
      fontSize: ["xs", "lg"],
      opacity: "0.7",
    },
  },
}

export const theme = extendTheme({
  fonts,
  styles,
  components,
});
