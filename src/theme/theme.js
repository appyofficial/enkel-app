import { configureFonts, DefaultTheme } from "react-native-paper";
import fontConfig from "./font-config";

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
