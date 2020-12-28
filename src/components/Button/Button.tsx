import styled from "@emotion/styled";
import {
  GridProps,
  LayoutProps,
  variant,
  shadow,
  ShadowProps,
} from "styled-system";
import { COMMON, CommonProps, GRID, LAYOUT } from "../constants";
import theme from "../theme";

export interface ButtonProps
  extends CommonProps,
    LayoutProps,
    GridProps,
    ShadowProps {
  variant?: "menu" | "primary" | "secondary";
}

const Button = styled.button<ButtonProps>(
  COMMON,
  LAYOUT,
  GRID,
  shadow,
  variant({ scale: "buttons" })
);
Button.defaultProps = { theme };

export { Button };
