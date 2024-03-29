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
      color: "primary",
    },

    ".cornerVisible": {
      transform: "translateY(0)",
    },

    ".cornerHidden": {
      transform: "translateY(-100%)",
    },

    "& .linkify": {
      "& .album-art": {
        transition: "0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
      "& .icon": {
        transform: "translateX(0) translateY(3px)",
        transition: "all 500ms ease",
      },
      "& .text": {
        textDecoration: "underline transparent",
        transition: "all 500ms ease",
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

    "& .spotifyLink": {
      "& .icon": {
        fill: "var(--chakra-colors-primary)",
        transition: "all 500ms ease",
      },
      "& .text": {
        textDecoration: "underline transparent",
        transition: "all 500ms ease",
      },
      _hover: {
        cursor: "pointer",
        "& .icon": {
          fill: "#1ED760",
        },
        "& .text": {
          color: "#1ED760",
          textDecorationColor: "#1ED760",
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
      "50%": { transform: "translateX(-50%)" },
      "75%": { transform: "translateX(-50%)" },
      "100%": { transform: "translateX(0%)" },
    },
  },
};

const lg = ["2rem", "2.2rem", "3.2rem"];

const components = {
  Heading: {
    baseStyle: {
      fontWeight: 500,
    },
    variants: {
      name: {
        fontSize: lg,
        fontWeight: 800,
        letterSpacing: "-1px",
      },
      section: {
        fontSize: ["1.4rem", "1.4rem", "1.8rem"],
        fontWeight: 800,
        letterSpacing: "-1px",
      },
      subSection: {
        fontSize: ["1.2rem", "1.2rem", "1.6rem"],
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
      spotify: {
        transition: "all 500ms ease",
        "& .icon": {
          transition: "all 0.2s ease",
          fill: "yellow",
          _hover: {
            fill: "green",
          },
        },
        _hover: {
          color: "green",
          textDecorationColor: "green",
        },
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
        fontSize: ["1.6rem", "1.8rem", "2rem"],
        fontWeight: 500,
        color: "primary",
        letterSpacing: "-0.5px",
      },
      wide: {
        color: "primary",
        fontSize: ["1.0rem", "1.2rem"],
        letterSpacing: "2px",
      },
      little: {
        color: "primary",
        fontSize: "1.0rem",
        letterSpacing: "2px",
      },
      tiny: {
        color: "primary",
        fontSize: "0.88rem",
        letterSpacing: "2px",
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
      experience: {
        color: "primary",
        fontSize: ["1.4rem", "1.4rem", "1.8rem"],
        fontWeight: 800,
        letterSpacing: "-1px",
      },
      experienceSub: {
        color: "primary",
        fontSize: ["1.2rem", "1.2rem", "1.6rem"],
        fontWeight: 600,
        letterSpacing: "-1px",
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
      bg: "black",
      tertiary: dark.colors.primary[300],
      secondary: dark.colors.primary[600],
      primary: dark.colors.primary[900],
    },
  },
  fonts,
  styles,
  components,
});
