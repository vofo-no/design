/** @jsx jsx */
import styled from "@emotion/styled";
import { variant, layout, shadow, space, grid, flexbox } from "styled-system";

type ContainerProps = {
  children?: React.ReactNode;
  boxShadow?: 0 | 1 | 2;
  px?: number | string;
  py?: number | string;
  mx?: number | string;
  my?: number | string;
  variant?: `default` | `white` | `primary` | `secondary` | `dark`;
  maxWidth?: number;
  gridTemplateRows?: string[];
  gridTemplateColumns?: string[];
  display?: string;
  alignItems?: string;
};

const Container: React.FC<ContainerProps> = styled("div")(
  layout,
  shadow,
  grid,
  space,
  flexbox,
  variant({
    variants: {
      default: {
        color: "text.primary",
      },
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
  variant: "default",
  py: 2,
  px: 3,
  my: 0,
  mx: "auto",
  boxShadow: 0,
  maxWidth: 8,
};

export { Container };
