/** @jsx jsx */
import { jsx, Global, css as emotionCss } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider, withTheme } from "emotion-theming";
import emotionNormalize from "emotion-normalize";
import css from "@styled-system/css";

import theme from "./defaultTheme";

interface ThemeProps {
  children?: React.ReactNode;
}

const Base = styled("div")(
  css({
    fontFamily: "body",
    fontSize: 2,
    lineHeight: "copy",
    color: "text.primary",
    "a:hover, a:active, a:focus": {
      color: "brand.primary",
    },
    "p, ul, ol, dl, blockquote": {
      marginY: 3,
      maxWidth: "72ch",
    },
    blockquote: {
      marginY: 4,
    },
    "h1, .h1": {
      fontFamily: "heading",
      lineHeight: "title",
      fontWeight: "heading",
      fontSize: [4, 5],
      paddingTop: 1,
      marginBottom: 2,
    },
    "h2, .h2": {
      fontFamily: "heading",
      lineHeight: "title",
      fontWeight: "heading",
      fontSize: [3, 4],
      paddingTop: 3,
      marginBottom: 2,
    },
    "h3, .h3": {
      fontFamily: "heading",
      lineHeight: "title",
      fontWeight: "heading",
      fontSize: [2, 3],
      paddingTop: 3,
      marginBottom: 2,
    },
    "h4, .h4": {
      fontFamily: "heading",
      lineHeight: "title",
      fontWeight: "heading",
      fontSize: [1, 2],
      paddingTop: 3,
      marginBottom: 2,
    },
  })
);

type MakeGlobalStylesProps = {
  colors: {
    bg: {
      base: string;
    };
  };
  fonts: {
    inject: string;
  };
};

const makeGlobalStyles = ({
  colors,
  fonts,
}: MakeGlobalStylesProps) => emotionCss`
${emotionNormalize}
${fonts.inject}
body {
  background: ${colors.bg.base};
}
`;

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

const Theme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Base>{children}</Base>
    </ThemeProvider>
  );
};

export { Theme };
