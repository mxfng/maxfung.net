import { ColorHues } from "@chakra-ui/react";

interface AppTheme {
  name: string;
  id: string;
  colors: {
    primary: ColorHues;
  };
}

const dark: AppTheme = {
  id: "dark",
  name: "Dark",
  colors: {
    primary: {
      50: "rgb(13, 13, 13)",
      100: "rgb(38, 38, 38)",
      200: "rgb(64, 64, 64)",
      300: "rgb(89, 89, 89)",
      400: "rgb(115, 115, 115)",
      500: "rgb(140, 140, 140)",
      600: "rgb(166, 166, 166)",
      700: "rgb(191, 191, 191)",
      800: "rgb(242, 242, 242)",
      900: "rgb(250, 250, 250)",
    },
  },
};

export default dark;
