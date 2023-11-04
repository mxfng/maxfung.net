import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/inter";
import "@fontsource-variable/victor-mono";
import dark from "./themes/dark";

const fonts = {
  heading: `'Inter Variable', sans-serif`,
  body: `'Inter Variable', sans-serif`,
};

const styles = {
  global: {
    body: {
      bg: "bg",
      backgroundImage:
        "linear-gradient(171deg, rgba(0,0,0,0.92), rgba(0,0,0,0.89)), url('grain.svg')",
      color: "primary",
    },

    ".navbar-visible": {
      transform: "translateY(0)",
      transition: "transform 0.3s ease-in-out",
    },

    ".navbar-hidden": {
      transform: "translateY(-100%)",
      transition: "transform 0.3s ease-in-out",
    },

    "& .linkify": {
      "& .album-art": {
        transition: "0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
      "& .icon": {
        transform: "translateX(0) translateY(3px)",
        transition: "all 0.2s ease",
      },
      "& .text": {
        textDecoration: "underline transparent",
        transition: "text-decoration 500ms ease",
      },
      _hover: {
        cursor: "pointer",
        "& .album-art": {
          transform: "scale(1.1)",
        },
        "& .icon": {
          transform: "translateX(3px)",
        },
        "& .text": {
          textDecorationColor: "primary",
        },
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

    "@keyframes unblur": {
      "0%": {
        filter: "blur(50px)",
      },
      "100%": {
        filter: "blur(0px)",
      },
    },

    "@keyframes wave": {
      "50%": {
        height: "20%",
      },
      "100%": {
        height: "100%",
      },
    },

    "@keyframes scrollText": {
      "25%": { transform: "translateX(0%)" },
      "50%": { transform: "translateX(-60%)" },
      "75%": { transform: "translateX(-60%)" },
      "100%": { transform: "translateX(0%)" },
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
        fontSize: ["2rem", "2.2rem", "3.2rem"],
        fontWeight: 800,
        letterSpacing: "-1px",
      },
      section: {
        fontSize: ["1.4rem", "1.4rem", "1.8rem"],
        fontWeight: 800,
        letterSpacing: "-1px",
      },
      bigLink: {
        fontFamily: `'Victor Mono Variable', sans-serif`,
        fontSize: ["1.6rem", "1.8rem", "2rem"],
        fontWeight: 100,
      },
    },
  },
  Link: {
    baseStyle: {
      fontWeight: 500,
      color: "primary",
      textDecoration: "underline transparent",
      transition: "text-decoration 500ms ease",
      _hover: {
        textDecorationColor: "primary",
      },
    },
    variants: {
      darker: {
        color: "tertiary",
      },
    },
  },
  Text: {
    baseStyle: {
      fontSize: ["1.0rem", "1.2rem"],
      color: "secondary",
      letterSpacing: ["-0.2px", "-0.5px"],
      fontWeight: 300,
    },
    variants: {
      darker: {
        color: "tertiary",
      },
      big: {
        fontFamily: `'Victor Mono Variable', sans-serif`,
        fontSize: ["1.6rem", "1.8rem", "2rem"],
        fontWeight: 100,
        color: "primary",
      },
      link: {
        color: "primary",
        fontWeight: "500",
        display: "inline-flex",
        className: "experience-text",
        textDecoration: "underline transparent",
        transition: "text-decoration 500ms ease",
        _hover: {
          textDecorationColor: "primary",
        },
      },
    },
  },
};

export const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors: dark.colors,
  semanticTokens: {
    colors: {
      bg: dark.colors.primary[100],
      tertiary: dark.colors.primary[500],
      secondary: dark.colors.primary[700],
      primary: dark.colors.primary[900],
    },
  },
  fonts,
  styles,
  components,
});
