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
        stroke: "rgb(240, 150, 243)",
      },
      "25%": {
        stroke: "rgb(128, 120, 249)",
      },
      "50%": {
        stroke: "green",
      },
      "75%": {
        stroke: "orange",
      },
      "100%": {
        stroke: "rgb(240, 150, 243)",
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
      fontSize: ["2xl", "sm"],
      fontWeight: "400",
    },
    sizes: {
      lg: {
        fontSize: ["xl", "2xl"],
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
      opacity: "0.7",
    },
  },
};

export const theme = extendTheme({
  fonts,
  styles,
  components,
});
