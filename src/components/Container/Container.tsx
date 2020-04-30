/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

import { defaultTheme, VofoTheme } from "../Theme";

interface ContainerProps {
  children?: React.ReactNode;
  elevation?: 0 | 1 | 2;
  padding?: 0 | 1 | 2;
  color?: `white` | `brand` | `dark`;
  dark?: boolean;
}

const Container = ({
  children = null,
  elevation = 0,
  color = null,
  padding = 1,
  dark = false,
}: ContainerProps) => {
  const theme: VofoTheme = useTheme() || defaultTheme;

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

export { Container };
