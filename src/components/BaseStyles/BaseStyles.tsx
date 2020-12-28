import React from "react";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { css as systemCss } from "@styled-system/css";
import { TypographyProps } from "styled-system";
import { COMMON, CommonProps, TYPOGRAPHY } from "../constants";
import theme from "../theme";
import { injectFonts } from "../theme-default";

interface BaseProps extends TypographyProps, CommonProps {
  theme?: any;
}

const Base = (props: any) => {
  const { color, lineHeight, fontFamily, fontSize, theme, ...rest } = props;
  return (
    <div {...rest}>
      <Global
        styles={css`
          ${injectFonts}
          body {
            background-color: ${theme.colors.background};
            margin: 0;
            padding: 0;
          }
        `}
      />
      {props.children}
    </div>
  );
};
Base.defaultProps = { theme };

const BaseStyles = styled(Base)<BaseProps>`
  ${TYPOGRAPHY}
  ${COMMON}
  ${({
    theme: {
      styles: { root, ...styles },
    },
  }) => systemCss(styles)}
`;
BaseStyles.defaultProps = {
  fontFamily: "body",
  lineHeight: "default",
  fontSize: 2,
  theme,
};

export { BaseStyles };
