import styled from "@emotion/styled";
import {
  GridProps,
  LayoutProps,
  variant,
  shadow,
  ShadowProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from "styled-system";
import { COMMON, CommonProps, GRID, LAYOUT } from "../constants";
import theme from "../theme";

interface BoxProps
  extends CommonProps,
    LayoutProps,
    GridProps,
    ShadowProps,
    PositionProps,
    FlexboxProps {
  variant?: "dark" | "primary" | "secondary" | "light";
  container?: boolean;
}

const Box = styled.div<BoxProps>(
  COMMON,
  LAYOUT,
  GRID,
  flexbox,
  shadow,
  position,
  variant({ scale: "boxes" }),
  variant({
    prop: "container",
    variants: {
      true: {
        py: 2,
        px: [0, 2, 3],
        mx: "auto",
        maxWidth: "large",
      },
    },
  })
);
Box.defaultProps = { theme };

export { Box };
