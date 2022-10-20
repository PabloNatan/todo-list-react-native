import "styled-components/native";
import { defaultTheme } from "./styles/defaultTheme";

type ThemeType = typeof defaultTheme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
