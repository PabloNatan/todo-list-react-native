import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Home } from "./screens/Home";
import { defaultTheme } from "./styles/defaultTheme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </ThemeProvider>
  );
}
