import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/inter";
import "@fontsource-variable/victor-mono";

const fonts = {
  heading: `'Inter Variable', sans-serif`,
  body: `'Inter Variable', sans-serif`,
};

const styles = {
  global: {
    body: {
      bg: "#000000",
      color: "#f2f2f2",
    },

    a: {
      textDecoration: "underline transparent",
      transition: "text-decoration 500ms ease",
      _hover: {
        textDecorationColor: "white",
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
    variants: {
      name: {
        fontSize: ["1.8rem", "2rem", "3rem"],
        fontWeight: 800,
        letterSpacing: "-1px",
      },
      section: {
        fontSize: ["1.2rem", "1.2rem", "1.5rem"],
        fontWeight: 800,
        letterSpacing: "-1px",
      },
      link: {
        fontSize: ["0.9rem", "1.2rem", "1.2rem"],
        fontWeight: 500,
        letterSpacing: ["-0.2px", "-0.5px"],
      },
      bigLink: {
        fontFamily: `'Victor Mono Variable', sans-serif`,
        fontSize: ["1.2rem", "1.2rem", "1.5rem"],
        fontWeight: 100,
      },
    },
  },
  Text: {
    baseStyle: {
      fontSize: ["0.9rem", "1.1rem"],
      color: "#a5a5a5",
      letterSpacing: ["-0.2px", "-0.5px"],
      fontWeight: 300,
    },
    variants: {
      darker: {
        color: "#595959",
      },
    },
  },
};

export const theme = extendTheme({
  fonts,
  styles,
  components,
});
