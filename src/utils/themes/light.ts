import { ColorHues } from "@chakra-ui/react";

interface AppTheme {
  name: string;
  id: string;
  colors: {
    palette: ColorHues;
  };
}

const light: AppTheme = {
  id: "light",
  name: "Light",
  colors: {
    palette: {
      50: "#ffffff",
      100: "#ffffff", // background
      200: "#595959", // darkest
      300: "#A5A5A5", // darker
      400: "#333333", // gray
      500: "#333333",
      600: "#333333",
      700: "#000000",
      800: "#000000",
      900: "#000000", // highlight
    },
  },
};

export default light;
