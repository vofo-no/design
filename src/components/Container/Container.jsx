/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import { defaultTheme } from "../Theme";

const Container = ({ children, elevation, color, padding, dark }) => {
  const theme = useTheme() || defaultTheme;

  return (
    <div
      css={{
        margin: `0 auto`,
        maxWidth: theme.maxWidth,
        padding: theme.spacing.unit * 1.5 * padding,
        backgroundColor: color ? theme.colors[color] : undefined,
        boxShadow: elevation
          ? `rgba(0, 0, 0, 0.1) ${elevation}px ${elevation}px 1px`
          : undefined,
        color: dark ? theme.colors.whiteText : undefined,
        "a:link, a:visited": dark
          ? {
              color: theme.colors.whiteText,
            }
          : undefined,
        "a:hover, a:active, a:focus": dark
          ? {
              color: theme.colors.white,
              backgroundColor: `rgba(255, 255, 255, 0.2)`,
              borderColor: theme.colors.white,
              textDecoration: `none`,
            }
          : undefined,
      }}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  elevation: PropTypes.oneOf([0, 1, 2]),
  padding: PropTypes.oneOf([0, 1, 2]),
  color: PropTypes.oneOf([null, `white`, `brand`, `dark`]),
  dark: PropTypes.bool,
};

Container.defaultProps = {
  node: null,
  elevation: 0,
  padding: 1,
  color: null,
  dark: false,
  css: {},
};

export { Container };
