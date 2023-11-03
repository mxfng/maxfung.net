import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/inter";
import "@fontsource-variable/victor-mono";

const fonts = {
  heading: `'Inter Variable', sans-serif`,
  body: `'Inter Variable', sans-serif`,
};

const colors = {
  palette: {
    100: "#000000",
    200: "#333333",
    300: "#595959",
    400: "#A5A5A5",
    900: "#f2f2f2",
  },
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

    ".navbar-visible": {
      transform: "translateY(0)",
      transition: "transform 0.3s ease-in-out",
    },

    ".navbar-hidden": {
      transform: "translateY(-100%)",
      transition: "transform 0.3s ease-in-out",
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
    },
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
});
