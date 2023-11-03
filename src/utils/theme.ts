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
      bg: "palette.100",
      color: "palette.900",
    },

    html: {
      fontSize: "16px",
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
          textDecorationColor: "palette.900",
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
  Link: {
    baseStyle: {
      fontWeight: 500,
      color: "palette.900",
      textDecoration: "underline transparent",
      transition: "text-decoration 500ms ease",
      _hover: {
        textDecorationColor: "palette.900",
      },
    },
    variants: {
      darker: {
        color: "palette.400",
      },
    },
  },
  Text: {
    baseStyle: {
      fontSize: ["0.9rem", "1.1rem"],
      color: "palette.400",
      letterSpacing: ["-0.2px", "-0.5px"],
      fontWeight: 300,
    },
    variants: {
      darker: {
        color: "palette.300",
      },
      big: {
        fontFamily: `'Victor Mono Variable', sans-serif`,
        fontSize: ["1.2rem", "1.2rem", "1.5rem"],
        fontWeight: 100,
        color: "palette.900",
      },
      link: {
        color: "palette.900",
        fontWeight: "500",
        display: "inline-flex",
        className: "experience-text",
        textDecoration: "underline transparent",
        transition: "text-decoration 500ms ease",
        _hover: {
          textDecorationColor: "palette.900",
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
  fonts,
  styles,
  components,
});
