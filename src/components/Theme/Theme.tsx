/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { injectGlobal } from "emotion";
import Typography from "typography";

export type VofoTheme = {
  colors: {
    brand: string;
    white: string;
    whiteText: string;
    gray: string;
    dark: string;
    darkText: string;
    light: string;
    green: string;
  };
  spacing: {
    unit: number;
  };
  breakpoints: {
    header: string;
  };
  maxWidth: string;
};

interface ThemeProps {
  theme?: VofoTheme;
  children?: React.ReactNode;
}

export const defaultTheme: VofoTheme = {
  colors: {
    brand: `#a31f34`,
    white: `#ffffff`,
    whiteText: `rgba(255, 255, 255, 0.9)`,
    gray: `#6d6e70`,
    dark: `#000c`,
    darkText: `rgba(0, 0, 0, 0.8)`,
    light: `#e3e3e3`,
    green: `#1f7d1f`,
  },
  spacing: {
    unit: 16,
  },
  breakpoints: {
    header: `725px`,
  },
  maxWidth: `960px`,
};

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerWeight: 600,
  headerFontFamily: [
    "Open Sans",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["600"],
    },
    {
      name: "Roboto",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
});

export const typographyJSON: any = typography.toJSON();

export const Theme = ({ theme = defaultTheme, children }: ThemeProps) => {
  injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  `;
  const body = {
    ...typographyJSON["body"],
    background: theme.colors.light,
  };
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          ...typographyJSON,
          body,
          "a:hover, a:active, a:focus": {
            color: theme.colors.brand,
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};
