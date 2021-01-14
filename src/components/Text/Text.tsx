import styled from "@emotion/styled";
import { TypographyProps, variant } from "styled-system";
import { COMMON, TYPOGRAPHY, CommonProps } from "../constants";
import theme from "../theme";

interface TextProps extends CommonProps, TypographyProps {
  vertical?: "responsive";
}

const Text = styled.p<TextProps>(
  COMMON,
  TYPOGRAPHY,
  variant({
    prop: "vertical",
    variants: {
      responsive: {
        writingMode: [null, null, "vertical-lr"],
        position: "relative",
      },
    },
  })
);
Text.defaultProps = {
  theme,
  fontFamily: "body",
  lineHeight: "default",
  fontSize: 2,
};

export { Text };
