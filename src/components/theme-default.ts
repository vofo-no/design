export const injectFonts = `@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');`;

const colors = {
  text: "#000c",
  background: "#e3e3e3",
  primary: "#a31f34",
  secondary: "#009890",
  blue: "#0078a4",
  gray: "#6d6e70",
  disabled: "#DEDEDE",
  error: "#D0421B",
  success: "#138000",
  textdisabled: "#9C9C9C",
  texterror: "#D0421B",
  textsuccess: "#138000",
  modes: {
    dark: {
      text: "#fff",
      background: "#2d2d2d",
      link: "#0cf",
      hover: "#ccf5ff",
    },
    primary: {
      text: "#fff",
      background: "#a31f34",
      link: "#ff0",
      hover: "#ffc",
    },
    light: {
      text: "#2d2d2d",
      background: "#fff",
      link: "#0078a4",
      hover: "#a31f34",
    },
  },
};

const fonts = {
  body: "'Lato', sans-serif",
  heading: "'Open Sans', sans-serif",
};

const fontSizes = [10, 14, 16, 21, 28, 38, 51];

const fontWeights = {
  regular: 400,
  body: 400,
  heading: 600,
  bold: 700,
};

const lineHeights = {
  heading: 1.25,
  default: 1.6,
};

const space = [
  "0",
  "4px",
  "8px",
  "16px",
  "24px",
  "32px",
  "40px",
  "48px",
  "64px",
  "80px",
  "96px",
  "112px",
  "128px",
];

const sizes = {
  small: "544px",
  medium: "768px",
  large: "1012px",
  xlarge: "1280px",
};

const breakpoints = ["544px", "768px", "1012px", "1280px"];

const shadows = {
  small: "1px 1px 1px rgba(0,0,0,0.1)",
  medium: "0 3px 6px rgba(149, 157, 165, 0.15)",
  large: "0 8px 24px rgba(149, 157, 165, 0.2)",
  "extra-large": "0 12px 48px rgba(149, 157, 165, 0.3)",
  formControl: "inset 0px 2px 0px rgba(225, 228, 232, 0.2)",
  formControlDisabled: "inset 0px 2px 0px rgba(220, 227, 237, 0.3)",
  formControlFocus: "rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em",
  primaryShadow:
    "0px 1px 0px rgba(20, 70, 32, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)",
  primaryActiveShadow: "inset 0px 1px 0px rgba(20, 70, 32, 0.2)",
};

const defaultBlock = { marginY: 3, maxWidth: "72ch" };

const theme = {
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  shadows,
  colors,
  text: {
    heading: {
      fontFamily: fonts.heading,
      lineHeight: lineHeights.heading,
      fontWeight: fontWeights.heading,
      paddingTop: 3,
      marginBottom: 2,
    },
    body: {
      fontFamily: fonts.body,
      lineHeight: lineHeights.default,
    },
  },
  boxes: {
    dark: {
      backgroundColor: colors.modes.dark.background,
      color: colors.modes.dark.text,
      a: {
        color: colors.modes.dark.link,
        "&:hover,&:active,&:focus": {
          color: colors.modes.dark.hover,
        },
      },
    },
    primary: {
      backgroundColor: colors.modes.primary.background,
      color: colors.modes.primary.text,
      a: {
        color: colors.modes.primary.link,
        "&:hover,&:active,&:focus": {
          color: colors.modes.primary.hover,
        },
      },
    },
    light: {
      backgroundColor: colors.modes.light.background,
      color: colors.modes.light.text,
      a: {
        color: colors.modes.light.link,
        "&:hover,&:active,&:focus": {
          color: colors.modes.light.hover,
        },
      },
    },
  },
  buttons: {
    menu: {
      fontFamily: fonts.heading,
      fontSize: fontSizes[2],
      background: "none",
      border: "none",
      alignItems: "center",
      cursor: "pointer",
      alignSelf: "flex-end",
      textTransform: "uppercase",
      padding: space[2],
      marginBottom: "auto",
      "div::before, div::after, div > div": {
        backgroundColor: colors.gray,
      },
      "&:hover": {
        color: colors.primary,
        "div::before, div::after, div > div": {
          backgroundColor: colors.primary,
        },
      },
    },
  },
  styles: {
    root: {
      fontFamily: fonts.body,
      lineHeight: lineHeights.default,
      fontSize: 2,
      color: colors.text,
    },
    h1: {
      variant: "text.heading",
      fontSize: [4, 5],
      paddingTop: 1,
      marginBottom: 2,
    },
    h2: {
      variant: "text.heading",
      fontSize: [3, 4],
    },
    h3: {
      variant: "text.heading",
      fontSize: [2, 3],
    },
    h4: {
      variant: "text.heading",
      fontSize: [1, 2],
    },
    h5: {
      variant: "text.heading",
      fontSize: [0, 1],
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    blockquote: {
      ...defaultBlock,
      marginY: 4,
    },
    p: defaultBlock,
    ul: defaultBlock,
    ol: defaultBlock,
    dl: defaultBlock,
    a: {
      "&:hover,&:active,&:focus": {
        color: colors.primary,
      },
    },
  },
};

export default theme;
