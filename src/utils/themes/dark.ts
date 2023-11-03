import { ColorHues } from "@chakra-ui/react";

interface AppTheme {
  name: string;
  id: string;
  colors: {
    palette: ColorHues;
  };
}

const dark: AppTheme = {
  id: "dark",
  name: "Dark",
  colors: {
    palette: {
      50: "#000000",
      100: "#000000", // background
      200: "#333333", // darkest
      300: "#595959", // darker
      400: "#A5A5A5", // gray
      500: "#A5A5A5",
      600: "#A5A5A5",
      700: "#f2f2f2",
      800: "#f2f2f2",
      900: "#f2f2f2", // highlight
    },
  },
};

export default dark;
