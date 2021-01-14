import {
  compose,
  system,
  typography,
  space,
  color,
  layout,
  display,
  grid,
  SpaceProps,
  ColorProps,
  DisplayProps,
} from "styled-system";

const whiteSpace = system({
  whiteSpace: {
    property: "whiteSpace",
  },
});

export const TYPOGRAPHY = compose(typography, whiteSpace);

export const COMMON = compose(space, color, display);
export interface CommonProps extends SpaceProps, ColorProps, DisplayProps {}

export const LAYOUT = layout;

export const GRID = grid;
