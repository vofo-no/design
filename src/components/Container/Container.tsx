/** @jsx jsx */
import styled from "@emotion/styled";
import { variant, layout, shadow } from "styled-system";

type ContainerProps = {
  children?: React.ReactNode;
  boxShadow?: 0 | 1 | 2;
  padding?: "default" | "none";
  variant?: `white` | `primary` | `secondary` | `dark`;
  maxWidth?: number;
};

const Container: React.FC<ContainerProps> = styled("div")(
  layout,
  shadow,
  variant({
    prop: "padding",
    variants: {
      default: {
        px: 3,
        py: 2,
        my: 0,
        mx: "auto",
      },
      none: {
        p: 0,
        my: 0,
        mx: "auto",
      },
    },
  }),
  variant({
    variants: {
      white: {
        color: "text.primary",
        bg: "bg.white",
      },
      primary: {
        color: "text.inverse",
        bg: "brand.primary",
        a: {
          color: "text.inverse",
        },
        "a:hover, a:active, a:focus": {
          color: "yellow",
        },
      },
      secondary: {
        color: "text.inverse",
        bg: "brand.secondary",
        a: {
          color: "text.inverse",
        },
        "a:hover, a:active, a:focus": {
          color: "yellow",
        },
      },
      dark: {
        color: "text.inverse",
        bg: "bg.dark",
        a: {
          color: "text.inverse",
        },
        "a:hover, a:active, a:focus": {
          color: "yellow",
        },
      },
    },
  })
);

Container.defaultProps = {
  variant: "white",
  padding: "default",
  boxShadow: 0,
  maxWidth: 8,
};

export { Container };
