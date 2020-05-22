const fonts = {
  body: "'Lato', sans-serif",
  heading: "'Open Sans', sans-serif",
  inject: `@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');`,
};

const fontSizes = [10, 14, 16, 21, 28, 38, 51];

const fontWeights = {
  regular: 400,
  heading: 600,
  bold: 700,
};

const lineHeights = {
  title: 1.25,
  copy: 1.6,
};

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];

const breakpoints = ["640px", "725px", "1024px"];

const shadows = [
  null,
  "rgba(0, 0, 0, 0.1) 1px 1px 1px",
  "rgba(0, 0, 0, 0.1) 2px 2px 1px",
];

export default {
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  shadows,
  colors: {
    brand: {
      primary: "#a31f34",
      secondary: "#009890",
      blue: "#0078a4",
      gray: "#6d6e70",
    },
    ui: {
      disabled: "#DEDEDE",
      error: "#D0421B",
      success: "#138000",
    },
    bg: {
      base: "#e3e3e3",
      white: "#ffffff",
      dark: "#2d2d2d",
    },
    text: {
      primary: "#000c",
      disabled: "#9C9C9C",
      inverse: "#FFFFFF",
      error: "#D0421B",
      success: "#138000",
    },
  },
};
