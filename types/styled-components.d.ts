import 'styled-components/native';

interface Screen {
  background: string;
}

interface Button {
  background: string;
  title: string;
}

interface Navigation {
  background: string;
  title: string;
}

interface Theme {
  screen: Screen;
  button: Button;
  navigation: Navigation;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Theme;
  }
}