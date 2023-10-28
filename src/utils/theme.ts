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
        color: "#f94144",
        stroke: "#f94144",
      },
      "10%": {
        color: "#f3722c",
        stroke: "#f3722c",
      },
      "20%": {
        color: "#f8961e",
        stroke: "#f8961e",
      },
      "30%": {
        color: "#f9844a",
        stroke: "#f9844a",
      },
      "40%": {
        color: "#f9c74f",
        stroke: "#f9c74f",
      },
      "50%": {
        color: "#90be6d",
        stroke: "#90be6d",
      },
      "60%": {
        color: "#43aa8b",
        stroke: "#43aa8b",
      },
      "70%": {
        color: "#4d908e",
        stroke: "#4d908e",
      },
      "80%": {
        color: "#577590",
        stroke: "#577590",
      },
      "90%": {
        color: "#277da1",
        stroke: "#277da1",
      },
      "100%": {
        color: "#f94144",
        stroke: "#f94144",
      },
    },

    "@keyframes fadeIn": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 100,
      },
    },

    "@keyframes brushStroke": {
      from: {
        strokeDashoffset: 600,
      },
      to: {
        strokeDashoffset: 0,
      },
    },
  },
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: 500,
    },
    sizes: {
      lg: {
        fontSize: ["2xl", "3xl"],
        fontFamily: `'Inter Tight', sans-serif`,
        fontWeight: 600,
        animation: "colorChange 10s linear infinite",
      },
      md: {
        fontSize: ["md", "lg"],
      },
      sm: {
        fontSize: ["sm", "md"],
      },
    },
  },
  Text: {
    baseStyle: {
      fontSize: ["sm", "lg"],
      color: "gray",
    },
  },
};

export const theme = extendTheme({
  fonts,
  styles,
  components,
});
